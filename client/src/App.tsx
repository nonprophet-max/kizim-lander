import { Switch, Route } from "wouter";
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

function Router() {
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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
