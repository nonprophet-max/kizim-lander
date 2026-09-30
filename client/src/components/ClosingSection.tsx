export default function ClosingSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #1C1E21 0%, #3A2F1C 25%, #76580D 50%, #C97C4B 75%, #8FA88A 100%)',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h2 
          className="text-6xl md:text-8xl font-bold mb-12 text-left"
          style={{
            color: 'rgba(251, 215, 142, 0.3)',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            WebkitTextStroke: '2px rgba(251, 215, 142, 0.6)'
          }}
          data-testid="text-thank-you"
        >
          thank<br/>you
        </h2>
        
        <p 
          className="text-3xl md:text-5xl font-bold text-right"
          style={{
            color: '#FFCB63',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)'
          }}
          data-testid="text-kizim-closing"
        >
          Kizim AI.
        </p>
      </div>
    </section>
  );
}
