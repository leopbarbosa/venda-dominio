import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export function ProjectShowcase() {
  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="/images/pier-oporto-1.jpg" 
                alt="Píer Oporto Itapema" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Recém-Inaugurado • 22 Dez</p>
                  <h3 className="text-2xl font-serif font-bold">O Ícone Consolidado de Santa Catarina</h3>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-primary font-serif">360º</div>
                <div className="text-sm text-muted-foreground leading-tight">Vista Panorâmica<br/>para o Mar</div>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-3/4 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              Conecte-se ao <span className="text-secondary">Futuro</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O Píer Oporto já é uma realidade que está transformando Itapema e Porto Belo. 
              Este domínio posiciona sua marca no centro dessa transformação.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Ideal para imobiliárias de alto padrão",
                "Perfeito para guias turísticos e agências",
                "Excelente para portal de notícias local",
                "Oportunidade para investidores visionários"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/market-report">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/20">
                Ver Potencial de Mercado
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
