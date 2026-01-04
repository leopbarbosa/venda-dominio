import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap } from "lucide-react";

export function RegistroBrInfo() {
  const steps = [
    {
      number: 1,
      title: "Proposta Aceita",
      description: "Você faz uma oferta e ela é aceita pelo proprietário atual."
    },
    {
      number: 2,
      title: "Autorização de Transferência",
      description: "O proprietário autoriza a transferência via Registro.br."
    },
    {
      number: 3,
      title: "Processamento Oficial",
      description: "O Registro.br processa a transferência (geralmente em 24-48 horas)."
    },
    {
      number: 4,
      title: "Domínio em Seu Nome",
      description: "O domínio é transferido para sua conta no Registro.br."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Shield className="w-4 h-4" />
            Processo Seguro e Oficial
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Como Funciona a <span className="text-secondary">Transferência</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O domínio pieritapema.com.br é registrado oficialmente no <strong>Registro.br</strong>, 
            o órgão responsável pela administração de domínios .br no Brasil. A transferência é 100% segura e regulamentada.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-secondary transition-colors duration-300 shadow-sm hover:shadow-md">
                <CardContent className="p-6 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-primary mt-4 mb-3 font-serif">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-serif">
                <Shield className="w-6 h-6 text-primary" />
                Segurança Garantida
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Transferência regulamentada pelo Registro.br</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Processo oficial e transparente</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Proteção legal completa</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-serif">
                <Zap className="w-6 h-6 text-primary" />
                Rápido e Eficiente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Transferência em 24-48 horas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Sem intermediários desnecessários</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Suporte durante todo o processo</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8">Perguntas Frequentes</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-primary mb-2">O domínio está realmente registrado no Registro.br?</h4>
              <p className="text-muted-foreground text-sm">Sim, pieritapema.com.br é um domínio legítimo registrado oficialmente no Registro.br. Você pode verificar em <a href="https://registro.br" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">registro.br</a>.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Quanto tempo leva para transferir o domínio?</h4>
              <p className="text-muted-foreground text-sm">O processo de transferência via Registro.br geralmente leva de 24 a 48 horas após a autorização do proprietário atual.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Preciso de um intermediário para a transferência?</h4>
              <p className="text-muted-foreground text-sm">Não é necessário. A transferência é feita diretamente entre você e o proprietário, com o Registro.br processando a mudança de forma oficial.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Qual é o custo de transferência?</h4>
              <p className="text-muted-foreground text-sm">O Registro.br cobra uma taxa padrão de transferência (geralmente em torno de R$ 40-50). Essa taxa é cobrada apenas uma vez, no momento da transferência.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
