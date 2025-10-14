import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import ModuleCard from "@/components/ModuleCard";
import ProgressBar from "@/components/ProgressBar";
import { mockUser, mockModulos, mockEventos, mockBadges } from "@/data/mockData";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Maria");

  useEffect(() => {
    const savedName = localStorage.getItem("tct_user_name");
    if (savedName) setUserName(savedName);
  }, []);

  const moduloAtual = mockModulos.find((m) => m.progresso > 0 && m.progresso < 100) || mockModulos[0];
  const aulaAtual = moduloAtual.aulas.find((a) => a.atual);
  const badgesAtivos = mockBadges.filter((b) => b.desbloqueado).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 safe-top">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              {userName.charAt(0)}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Olá,</p>
              <p className="font-semibold text-foreground">{userName}! 👋</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
          </Button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Hero Card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-5 shadow-lg animate-slide-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🎯</span>
            <h2 className="font-bold text-lg">CONTINUE APRENDENDO</h2>
          </div>
          
          <div className="space-y-2 mb-4">
            <p className="text-sm opacity-90">
              Módulo {moduloAtual.id}, Aula {aulaAtual?.id || 1}
            </p>
            <p className="font-semibold text-base">
              {aulaAtual?.titulo || "Continue seus estudos"}
            </p>
          </div>

          <ProgressBar 
            progresso={mockUser.progressoGeral} 
            cor="primary"
            className="mb-3"
          />
          
          <p className="text-sm opacity-90 mb-4">
            {mockUser.horasCompletadas}h / {mockUser.horasTotais}h completadas
          </p>

          <Button
            onClick={() => navigate("/aprender")}
            variant="secondary"
            className="w-full touch-feedback"
            size="lg"
          >
            Continuar Agora
          </Button>
        </div>

        {/* Acesso Rápido */}
        <section>
          <h3 className="font-semibold text-foreground mb-3">Acesso Rápido</h3>
          <div className="grid grid-cols-3 gap-3">
            <Button
              onClick={() => navigate("/aprender")}
              variant="outline"
              className="h-auto flex-col gap-2 p-4 touch-feedback"
            >
              <span className="text-3xl">📚</span>
              <span className="text-xs">Módulos</span>
            </Button>
            <Button
              onClick={() => navigate("/simular")}
              variant="outline"
              className="h-auto flex-col gap-2 p-4 touch-feedback"
            >
              <span className="text-3xl">🎮</span>
              <span className="text-xs">Simulador</span>
            </Button>
            <Button
              onClick={() => navigate("/aprender?tab=glossario")}
              variant="outline"
              className="h-auto flex-col gap-2 p-4 touch-feedback"
            >
              <span className="text-3xl">📖</span>
              <span className="text-xs">Glossário</span>
            </Button>
          </div>
        </section>

        {/* Seu Progresso */}
        <section>
          <h3 className="font-semibold text-foreground mb-3">Seu Progresso</h3>
          <div className="space-y-3">
            {mockModulos.map((modulo) => (
              <ModuleCard
                key={modulo.id}
                modulo={modulo}
                onClick={() => navigate("/aprender")}
              />
            ))}
          </div>
        </section>

        {/* Conquistas Recentes */}
        <section>
          <h3 className="font-semibold text-foreground mb-3">Conquistas Recentes</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {badgesAtivos.map((badge) => (
              <div
                key={badge.id}
                className="flex-shrink-0 bg-card border border-border rounded-lg px-4 py-2 flex items-center gap-2"
              >
                <span className="text-2xl">{badge.icone}</span>
                <span className="text-sm font-medium whitespace-nowrap">
                  {badge.nome}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Próximos Eventos */}
        <section>
          <h3 className="font-semibold text-foreground mb-3">Próximos Eventos</h3>
          <div className="space-y-2">
            {mockEventos.map((evento) => (
              <div
                key={evento.id}
                className="bg-card rounded-lg p-4 border border-border"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">
                    {evento.tipo === "webinar" ? "📅" : "⏰"}
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {evento.data} {evento.hora && `- ${evento.hora}`}
                    </p>
                    <p className="font-medium text-foreground">{evento.titulo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
