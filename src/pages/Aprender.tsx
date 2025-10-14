import { useState } from "react";
import { Search, CheckCircle2, Circle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BottomNav from "@/components/BottomNav";
import ProgressBar from "@/components/ProgressBar";
import { mockModulos, mockCasosReais, mockGlossario } from "@/data/mockData";
import { cn } from "@/lib/utils";

const Aprender = () => {
  const [activeTab, setActiveTab] = useState<"modulos" | "casos" | "glossario">("modulos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const tabs = [
    { id: "modulos" as const, label: "Módulos" },
    { id: "casos" as const, label: "Casos Reais" },
    { id: "glossario" as const, label: "Glossário" },
  ];

  const filteredGlossario = mockGlossario.filter((termo) =>
    termo.termo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    termo.traducaoSimples.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCasos = selectedFilter === "Todos"
    ? mockCasosReais
    : mockCasosReais.filter((caso) => caso.tags.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header com Tabs */}
      <header className="bg-card border-b border-border sticky top-0 z-40 safe-top">
        <div className="max-w-lg mx-auto">
          <div className="flex border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 py-4 text-sm font-medium transition-colors touch-feedback",
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        {/* View: MÓDULOS */}
        {activeTab === "modulos" && (
          <div className="space-y-4 animate-fade-in">
            {mockModulos.map((modulo) => (
              <div key={modulo.id} className="bg-card rounded-lg p-5 shadow-card">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-4xl">{modulo.icone}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">
                      MÓDULO {modulo.id}
                    </h3>
                    <p className="text-sm text-muted-foreground">{modulo.titulo}</p>
                  </div>
                </div>

                {modulo.desbloqueado ? (
                  <>
                    <ProgressBar progresso={modulo.progresso} cor={modulo.cor} />
                    <p className="text-sm text-muted-foreground mt-2 mb-4">
                      {modulo.horasCompletadas}h / {modulo.horasTotais}h completadas
                    </p>

                    <div className="space-y-2 mb-4">
                      {modulo.aulas.map((aula) => (
                        <div
                          key={aula.id}
                          className={cn(
                            "flex items-center gap-3 p-2 rounded-lg",
                            aula.atual && "bg-primary/5"
                          )}
                        >
                          {aula.concluida ? (
                            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                          ) : aula.bloqueada ? (
                            <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-primary flex-shrink-0" />
                          )}
                          <span className={cn(
                            "text-sm flex-1",
                            aula.bloqueada ? "text-muted-foreground" : "text-foreground"
                          )}>
                            Aula {aula.id}: {aula.titulo}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {aula.duracao}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full touch-feedback"
                      variant={modulo.progresso > 0 ? "default" : "outline"}
                    >
                      {modulo.progresso > 0 
                        ? `Continuar Aula ${modulo.aulas.find(a => a.atual)?.id || modulo.aulas.length + 1}` 
                        : "Começar Módulo"}
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <Lock className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      🔒 Bloqueado
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {modulo.requisito}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* View: CASOS REAIS */}
        {activeTab === "casos" && (
          <div className="space-y-4 animate-fade-in">
            {/* Filtros */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {["Todos", "Idosos", "Rural", "Baixa Escolaridade", "Saúde", "Bancário"].map((filter) => (
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

            {/* Cards de Casos */}
            {filteredCasos.map((caso) => (
              <div key={caso.id} className="bg-card rounded-lg p-5 shadow-card">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{caso.icone}</span>
                  <h3 className="font-bold text-foreground flex-1 uppercase text-sm">
                    {caso.titulo}
                  </h3>
                </div>

                <div className="flex gap-2 mb-3">
                  {caso.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-sm text-muted-foreground">Dificuldade:</span>
                  {[1, 2, 3].map((star) => (
                    <span key={star} className="text-warning">
                      {star <= caso.dificuldade ? "⭐" : "☆"}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {caso.descricao}
                </p>

                <Button className="w-full touch-feedback">
                  Estudar Caso
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* View: GLOSSÁRIO */}
        {activeTab === "glossario" && (
          <div className="space-y-4 animate-fade-in">
            {/* Barra de Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar termo técnico..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Cards de Termos */}
            {filteredGlossario.map((termo) => (
              <div key={termo.id} className="bg-card rounded-lg p-5 shadow-card">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{termo.icone}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground uppercase text-sm">
                      {termo.termo}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {termo.categoria}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">
                      💬 TRADUÇÃO SIMPLES:
                    </p>
                    <p className="text-sm text-foreground">
                      {termo.traducaoSimples}
                    </p>
                  </div>

                  <Button variant="outline" className="w-full touch-feedback">
                    Ver Mais
                  </Button>
                </div>
              </div>
            ))}

            {filteredGlossario.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nenhum termo encontrado
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Aprender;
