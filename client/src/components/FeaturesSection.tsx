import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Anchor, Building2, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Anchor,
    title: "Píer Oporto",
    description: "O único Hard Rock Café do mundo sobre a água e o primeiro píer turístico desta magnitude no Brasil."
  },
  {
    icon: TrendingUp,
    title: "Valorização Recorde",
    description: "Itapema é a 2ª cidade com maior valorização imobiliária no Brasil, com crescimento constante."
  },
  {
    icon: Users,
    title: "Turismo Premium",
    description: "Milhões de turistas visitam a região anualmente, buscando experiências exclusivas e luxo."
  },
  {
    icon: Building2,
    title: "Desenvolvimento",
    description: "Parte de um Master Plan ambicioso que já redefiniu o litoral catarinense com sua inauguração."
  }
];

export function FeaturesSection() {
  return (
    <section id="details" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Por que este domínio é <span className="text-secondary">valioso?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            PierItapema.com.br não é apenas um endereço web. É a autoridade digital para o novo ícone turístico já em operação no sul do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/50 backdrop-blur-sm group overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center text-center h-full relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  <div className="mb-6 p-4 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 font-serif">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
