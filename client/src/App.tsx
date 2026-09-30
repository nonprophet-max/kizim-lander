import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Problem from "@/pages/Problem";
import Solution from "@/pages/Solution";
import MVP from "@/pages/MVP";
import Team from "@/pages/Team";
import NotFound from "@/pages/not-found";

function AppRoutes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/problem" component={Problem} />
        <Route path="/solution" component={Solution} />
        <Route path="/mvp" component={MVP} />
        <Route path="/team" component={Team} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

// Real hosting serves this at a domain root, where path-based routing (the
// wouter default) gives clean URLs like /team. A preview embedded under some
// other path (e.g. a hosted artifact) needs hash-based routing instead, since
// it doesn't control the outer path — toggled at build time via
// VITE_HASH_ROUTING, off by default.
const routerProps =
  import.meta.env.VITE_HASH_ROUTING === "true" ? { hook: useHashLocation } : {};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter {...routerProps}>
          <Header />
          <Toaster />
          <AppRoutes />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
