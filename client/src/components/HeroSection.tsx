import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/pier-oporto-2.jpg')",
          filter: "brightness(0.6)"
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/30 to-primary/60" />

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            DOMÍNIO PREMIUM À VENDA
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            PierItapema<span className="text-secondary">.com.br</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A porta de entrada digital para o novo ícone turístico de Santa Catarina. 
            <br className="hidden md:block" />
            Invista na localização mais exclusiva da internet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fazer uma Oferta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white/30 text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-full backdrop-blur-sm"
              onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba Mais
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </motion.div>

      <WaveDivider position="bottom" fill="fill-background" />
    </section>
  );
}
