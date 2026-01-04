import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Garanta este <span className="text-secondary">Ativo Digital</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Domínios premium como este são únicos. Entre em contato diretamente com o proprietário para negociar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Direto</h3>
                  <p className="text-white/70 mb-2">Envie sua proposta por email.</p>
                  <a href="mailto:leonardopbarbosa@live.com" className="text-secondary hover:text-white transition-colors font-medium text-lg">
                    leonardopbarbosa@live.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-secondary">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Negociação Rápida</h3>
            <p className="text-white/70">
              Transferência oficial via <strong>Registro.br</strong> - o órgão responsável por domínios .br no Brasil. Processo 100% seguro, regulamentado e transparente.
            </p>
                </div>
              </div>
            </div>

            <form className="space-y-4" action="mailto:leonardopbarbosa@live.com" method="GET">
              <input type="hidden" name="subject" value="Interesse no domínio PierItapema.com.br" />
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Seu Nome</label>
                <Input 
                  id="name" 
                  placeholder="Nome completo" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-secondary focus:ring-secondary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="offer" className="text-sm font-medium text-white/80">Sua Oferta (Opcional)</label>
                <Input 
                  id="offer" 
                  placeholder="R$ 0,00" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-secondary focus:ring-secondary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Mensagem</label>
                <Textarea 
                  id="message" 
                  name="body"
                  placeholder="Gostaria de saber mais detalhes sobre a venda..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-secondary focus:ring-secondary min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-6 text-lg rounded-xl shadow-lg shadow-secondary/20 transition-transform hover:scale-[1.02]">
                Enviar Proposta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
