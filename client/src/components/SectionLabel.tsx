interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="text-primary text-xl md:text-2xl font-medium mb-8" data-testid="text-section-label">
      // {children} //
    </div>
  );
}
