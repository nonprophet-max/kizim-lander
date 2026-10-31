export default function SectionLabel({ children }: {children:React.ReactNode}) {
  return <div className="section-label" data-testid="text-section-label"><span aria-hidden="true" />{children}</div>;
}
