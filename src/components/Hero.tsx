import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background-gradient overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-8">
        <div 
          className={`transform transition-all duration-1000 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-display font-bold tracking-tight">
            <span className="bg-hero-gradient bg-clip-text text-transparent animate-pulse">
              Ahoj
            </span>
          </h1>
          
          <div 
            className={`mt-8 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              Vítejte na našich stránkách
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-20 h-px bg-hero-gradient opacity-60" />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <div className="w-20 h-px bg-hero-gradient opacity-60" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-bounce delay-500" />
      <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-primary rounded-full animate-bounce delay-1000" />
      <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-700" />
    </main>
  );
};

export default Hero;