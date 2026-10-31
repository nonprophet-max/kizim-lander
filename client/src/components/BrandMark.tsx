export default function BrandMark({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
    <path d="M0 0h32v32H0z" fill="currentColor" />
    <path d="M9 7v18h4v-7l6 7h5l-8-9 8-9h-5l-6 7V7H9Z" fill="hsl(var(--background))" />
  </svg>;
}
