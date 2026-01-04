import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Link } from "wouter";

// Dados simulados baseados nas tendências reais pesquisadas
const valorizacaoData = [
  { ano: "2021", itapema: 18, mediaNacional: 5 },
  { ano: "2022", itapema: 22, mediaNacional: 6 },
  { ano: "2023", itapema: 19, mediaNacional: 5.5 },
  { ano: "2024", itapema: 15, mediaNacional: 5.2 },
  { ano: "2025", itapema: 13.28, mediaNacional: 5.1 },
];

const precoMetroData = [
  { cidade: "Balneário Camboriú", preco: 13800 },
  { cidade: "Itapema", preco: 13573 },
  { cidade: "Vitória", preco: 11000 },
  { cidade: "Florianópolis", preco: 10800 },
  { cidade: "São Paulo", preco: 10500 },
];

const projecaoTurismo = [
  { ano: "2023", visitantes: 1.2 },
  { ano: "2024", visitantes: 1.4 },
  { ano: "2025", visitantes: 1.8 },
  { ano: "2025", visitantes: 2.2, evento: "Inauguração (Dez/22)" },
  { ano: "2026", visitantes: 2.8, evento: "Operação Plena" },
  { ano: "2027", visitantes: 3.2 },
];

export default function MarketReport() {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Relatório de Mercado - PierItapema',
        text: 'Confira os dados de valorização e potencial turístico de Itapema.',
        url: window.location.href,
      });
    } else {
      alert('Link copiado para a área de transferência!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-20">
      {/* Header */}
      <header className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/itapema-beach.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="container px-4 mx-auto relative z-10">
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-6 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Relatório de <span className="text-secondary">Mercado</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Análise detalhada do potencial de valorização e impacto turístico do Píer Oporto em Itapema/SC.
          </p>
        </div>
      </header>

      <div className="container px-4 mx-auto -mt-8 relative z-20">
        {/* Action Bar */}
        <div className="bg-white dark:bg-card rounded-xl shadow-lg p-4 mb-12 flex flex-wrap gap-4 justify-between items-center border border-border/50">
          <div className="text-sm text-muted-foreground">
            <span className="font-bold text-primary">Fonte:</span> Índice Fipezap, Dados de Mercado Local
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" /> Compartilhar
            </Button>
            <Button onClick={handlePrint} className="bg-primary text-white hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" /> Salvar PDF
            </Button>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Valorização Chart */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Valorização Imobiliária (%)</CardTitle>
              <CardDescription>Comparativo anual: Itapema vs Média Nacional</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={valorizacaoData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="ano" stroke="#6b7280" tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" tickLine={false} axisLine={false} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="top" height={36} />
                  <Line 
                    type="monotone" 
                    dataKey="itapema" 
                    name="Itapema" 
                    stroke="var(--secondary)" 
                    strokeWidth={3} 
                    dot={{ r: 6, fill: "var(--secondary)", strokeWidth: 2, stroke: "#fff" }} 
                    activeDot={{ r: 8 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mediaNacional" 
                    name="Média Nacional" 
                    stroke="var(--primary)" 
                    strokeWidth={2} 
                    strokeDasharray="5 5" 
                    dot={false} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Preço m² Chart */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-none bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Top 5 M² Mais Caros do Brasil</CardTitle>
              <CardDescription>Itapema consolida-se como o 2º metro quadrado mais valorizado</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={precoMetroData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="cidade" 
                    type="category" 
                    width={120} 
                    tick={{ fill: '#374151', fontSize: 12, fontWeight: 500 }} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Preço Médio']}
                  />
                  <Bar dataKey="preco" radius={[0, 4, 4, 0]} barSize={32}>
                    {precoMetroData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.cidade === 'Itapema' ? 'var(--secondary)' : 'var(--primary)'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Projeção Turismo Chart */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-none bg-white/50 backdrop-blur-sm lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Impacto do Píer no Turismo</CardTitle>
              <CardDescription>Projeção de visitantes anuais (em milhões) após a inauguração em Dezembro</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projecaoTurismo} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="ano" stroke="#6b7280" tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Line 
                    type="stepAfter" 
                    dataKey="visitantes" 
                    name="Visitantes (Milhões)" 
                    stroke="var(--accent)" 
                    strokeWidth={3} 
                    dot={{ r: 6, fill: "var(--accent)", strokeWidth: 2, stroke: "#fff" }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/20 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <h3 className="text-4xl font-bold mb-2 font-serif">13.28%</h3>
            <p className="text-secondary font-medium mb-4">Valorização Anual</p>
            <p className="text-white/70 text-sm">Itapema supera consistentemente a média nacional e a inflação, garantindo retorno real sobre o investimento.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <h3 className="text-4xl font-bold mb-2 font-serif text-primary">R$ 100mi</h3>
            <p className="text-secondary font-medium mb-4">Investimento no Píer</p>
            <p className="text-muted-foreground text-sm">O aporte massivo em infraestrutura turística cria um efeito multiplicador em toda a economia local.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <h3 className="text-4xl font-bold mb-2 font-serif text-primary">#2</h3>
            <p className="text-secondary font-medium mb-4">Ranking Nacional</p>
            <p className="text-muted-foreground text-sm">Segunda cidade com o metro quadrado mais valorizado do Brasil, atrás apenas da vizinha Balneário Camboriú.</p>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center bg-muted/50 rounded-3xl p-12 mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Dados que comprovam o sucesso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Os números não mentem. O momento para investir em Itapema e garantir sua presença digital é agora.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-6 rounded-full text-lg shadow-lg">
              Fazer Proposta pelo Domínio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
