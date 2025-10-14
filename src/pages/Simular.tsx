import { useState } from "react";
import { HelpCircle, ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import BottomNav from "@/components/BottomNav";
import { mockCenarios } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Simular = () => {
  const [selectedCenario, setSelectedCenario] = useState<number | null>(null);
  const [resposta, setResposta] = useState("");
  const [mostrandoFeedback, setMostrandoFeedback] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const { toast } = useToast();

  const cenarioAtivo = selectedCenario 
    ? mockCenarios.find(c => c.id === selectedCenario) 
    : null;

  const filteredCenarios = selectedFilter === "Todos"
    ? mockCenarios
    : mockCenarios.filter(c => c.publico === selectedFilter);

  const handleEnviarResposta = () => {
    if (!resposta.trim()) {
      toast({
        title: "Campo vazio",
        description: "Por favor, escreva sua explicação antes de enviar.",
        variant: "destructive",
      });
      return;
    }
    
    setMostrandoFeedback(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProximo = () => {
    setSelectedCenario(null);
    setResposta("");
    setMostrandoFeedback(false);
    toast({
      title: "Parabéns! 🎉",
      description: "Continue praticando para se tornar um TCT expert!",
    });
  };

  if (!selectedCenario) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <header className="bg-card border-b border-border px-4 py-4 safe-top">
          <div className="max-w-lg mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Simulador TCT</h1>
            <Button variant="ghost" size="icon">
              <HelpCircle className="w-5 h-5" />
            </Button>
          </div>
        </header>

        <main className="max-w-lg mx-auto px-4 py-6">
          {/* Filtros */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {["Todos", "Idosos", "Rural", "Empreendedores"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors touch-feedback",
                  selectedFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards de Cenários */}
          <div className="space-y-4">
            {filteredCenarios.map((cenario) => (
              <div key={cenario.id} className="bg-card rounded-lg p-5 shadow-card">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-4xl">{cenario.icone}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground uppercase text-sm mb-1">
                      {cenario.titulo}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Público: {cenario.publico}</span>
                      <span>•</span>
                      <span>{cenario.tecnologia}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-sm text-muted-foreground">Dificuldade:</span>
                  {[1, 2, 3].map((star) => (
                    <span key={star} className="text-warning">
                      {star <= cenario.dificuldade ? "⭐" : "☆"}
                    </span>
                  ))}
                </div>

                {cenario.status === "novo" && (
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                    Novo
                  </span>
                )}

                <Button
                  onClick={() => setSelectedCenario(cenario.id)}
                  className="w-full touch-feedback"
                  variant={cenario.status === "em_andamento" ? "default" : "outline"}
                >
                  {cenario.status === "em_andamento" ? "Continuar" : "Iniciar Simulação"}
                </Button>
              </div>
            ))}
          </div>
        </main>

        <BottomNav />
      </div>
    );
  }

  if (mostrandoFeedback) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <header className="bg-card border-b border-border px-4 py-4 safe-top">
          <div className="max-w-lg mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedCenario(null);
                setMostrandoFeedback(false);
                setResposta("");
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </div>
        </header>

        <main className="max-w-lg mx-auto px-4 py-6 space-y-4 animate-fade-in">
          {/* Header de Resultado */}
          <div className="bg-success/10 border-2 border-success rounded-lg p-6 text-center">
            <span className="text-4xl mb-3 block">✅</span>
            <h2 className="text-xl font-bold text-foreground mb-2">
              ANÁLISE CONCLUÍDA
            </h2>
            <div className="text-3xl font-bold text-success my-4">85/100</div>
            <p className="text-sm text-success font-medium">
              🟢 Muito Bom! Continue assim!
            </p>
          </div>

          {/* Pontos Fortes */}
          <div className="bg-card rounded-lg p-5 shadow-card">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-success">✓</span>
              PONTOS FORTES
            </h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li>• Linguagem muito acessível</li>
              <li>• Usou analogia clara ("é como entregar dinheiro na mão")</li>
              <li>• Demonstrou empatia</li>
              <li>• Explicou segurança</li>
            </ul>
          </div>

          {/* Pontos de Melhoria */}
          <div className="bg-card rounded-lg p-5 shadow-card">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-warning">⚠</span>
              PONTOS DE MELHORIA
            </h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li>• Poderia sugerir fazer um Pix de teste (R$ 1)</li>
              <li>• Mencionar ajuda do banco para primeira vez</li>
            </ul>
          </div>

          {/* Resposta Modelo */}
          <div className="bg-card rounded-lg p-5 shadow-card">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-warning" />
              RESPOSTA MODELO
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              {cenarioAtivo?.respostaModelo}
            </p>
          </div>

          {/* Conquistas */}
          <div className="bg-gradient-to-r from-warning/20 to-warning/10 rounded-lg p-5 border border-warning/30">
            <h3 className="font-bold text-foreground mb-3">🎉 CONQUISTAS</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <span className="text-sm font-medium">+50 pontos XP</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <span className="text-sm font-medium">
                  "Comunicador Empático" (novo!)
                </span>
              </div>
            </div>
          </div>

          {/* Botões de Navegação */}
          <div className="flex gap-3 pt-4 sticky bottom-20 bg-background pb-4">
            <Button
              variant="outline"
              className="flex-1 touch-feedback"
              onClick={() => {
                setMostrandoFeedback(false);
                setResposta("");
              }}
            >
              ↻ Refazer
            </Button>
            <Button
              className="flex-1 touch-feedback"
              onClick={handleProximo}
            >
              → Próximo
            </Button>
          </div>
        </main>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="bg-card border-b border-border px-4 py-4 safe-top sticky top-0 z-40">
        <div className="max-w-lg mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedCenario(null);
              setResposta("");
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-4">
        {/* Progresso */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/6 transition-all" />
          </div>
          <span className="text-sm text-muted-foreground">Cenário 2 de 12</span>
        </div>

        {/* Contexto */}
        <div className="bg-card rounded-lg p-5 shadow-card">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="text-2xl">📱</span>
            SITUAÇÃO
          </h3>
          <div className="text-sm text-foreground whitespace-pre-line leading-relaxed">
            {cenarioAtivo?.contexto}
          </div>
        </div>

        {/* Missão */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            SUA MISSÃO
          </h3>
          <div className="text-sm text-foreground whitespace-pre-line leading-relaxed">
            {cenarioAtivo?.missao}
          </div>
        </div>

        {/* Campo de Resposta */}
        <div className="bg-card rounded-lg p-5 shadow-card">
          <Textarea
            placeholder="Digite sua explicação aqui..."
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
            className="min-h-[200px] text-base resize-none"
          />
          <p className="text-xs text-muted-foreground mt-2 text-right">
            {resposta.length} / 1000 caracteres
          </p>
        </div>
      </main>

      {/* Botões Fixos no Bottom */}
      <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border p-4 safe-bottom">
        <div className="max-w-lg mx-auto flex gap-3">
          <Button
            variant="outline"
            className="flex-1 touch-feedback"
            onClick={() => {
              toast({
                title: "💡 Dica",
                description: cenarioAtivo?.dica || "Use analogias do dia a dia!",
              });
            }}
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            Ver Dica
          </Button>
          <Button
            className="flex-1 touch-feedback"
            onClick={handleEnviarResposta}
            disabled={!resposta.trim()}
          >
            ✓ Enviar
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Simular;
