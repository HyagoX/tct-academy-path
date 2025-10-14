import { useState, useEffect } from "react";
import { Download, Settings, Bell, HelpCircle, FileText, LogOut, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import BottomNav from "@/components/BottomNav";
import { mockUser, mockModulos, mockBadges } from "@/data/mockData";
import { cn } from "@/lib/utils";

const Perfil = () => {
  const [userName, setUserName] = useState("Maria Silva");
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const savedName = localStorage.getItem("tct_user_name");
    if (savedName) setUserName(savedName);
  }, []);

  const handleFontSizeChange = (increase: boolean) => {
    setFontSize(prev => {
      const newSize = increase ? Math.min(prev + 2, 22) : Math.max(prev - 2, 14);
      document.documentElement.style.fontSize = `${newSize}px`;
      return newSize;
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header com Avatar */}
      <header className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground px-4 py-8 safe-top">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-4xl font-bold mx-auto mb-4 border-4 border-primary-foreground/30">
            {userName.charAt(0)}
          </div>
          <h1 className="text-xl font-bold mb-1">{userName}</h1>
          <p className="text-sm opacity-90">{mockUser.email}</p>
          <Button
            variant="secondary"
            size="sm"
            className="mt-4 touch-feedback"
          >
            Editar Perfil
          </Button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Estatísticas */}
        <section>
          <h2 className="font-semibold text-foreground mb-3">Suas Estatísticas</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card rounded-lg p-4 text-center shadow-card">
              <p className="text-3xl font-bold text-primary mb-1">
                {mockUser.horasCompletadas}h
              </p>
              <p className="text-sm text-muted-foreground">Estudadas</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center shadow-card">
              <p className="text-3xl font-bold text-secondary mb-1">
                {mockUser.simulacoesCompletas}
              </p>
              <p className="text-sm text-muted-foreground">Simulações</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center shadow-card">
              <p className="text-3xl font-bold text-accent mb-1">
                {mockUser.taxaAcerto}%
              </p>
              <p className="text-sm text-muted-foreground">Taxa Acerto</p>
            </div>
            <div className="bg-card rounded-lg p-4 text-center shadow-card">
              <p className="text-3xl font-bold text-success mb-1">
                {mockUser.casosEstudados}
              </p>
              <p className="text-sm text-muted-foreground">Casos</p>
            </div>
          </div>
        </section>

        {/* Progresso Detalhado */}
        <section>
          <h2 className="font-semibold text-foreground mb-3">Progresso Detalhado</h2>
          <div className="bg-card rounded-lg p-5 shadow-card space-y-3">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progresso Geral</span>
              <span className="font-semibold text-foreground">
                {mockUser.progressoGeral}%
              </span>
            </div>
            {mockModulos.map((modulo) => (
              <div key={modulo.id}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-foreground">{modulo.titulo}</span>
                  <span className="font-medium">{modulo.progresso}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className={cn(
                      "h-full transition-all duration-500",
                      modulo.cor === "primary" && "bg-primary",
                      modulo.cor === "secondary" && "bg-secondary",
                      modulo.cor === "accent" && "bg-accent"
                    )}
                    style={{ width: `${modulo.progresso}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conquistas */}
        <section>
          <h2 className="font-semibold text-foreground mb-3">Minhas Conquistas</h2>
          <div className="bg-card rounded-lg p-5 shadow-card">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {mockBadges.map((badge) => (
                <div
                  key={badge.id}
                  className={cn(
                    "flex flex-col items-center gap-2 p-3 rounded-lg transition-all",
                    badge.desbloqueado
                      ? "bg-primary/5"
                      : "opacity-30 grayscale"
                  )}
                >
                  <span className="text-3xl">{badge.icone}</span>
                  <span className="text-[10px] text-center text-muted-foreground leading-tight">
                    {badge.nome}
                  </span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full touch-feedback">
              Ver todos os badges
            </Button>
          </div>
        </section>

        {/* Certificados */}
        <section>
          <h2 className="font-semibold text-foreground mb-3">Certificados</h2>
          <div className="bg-card rounded-lg divide-y divide-border shadow-card">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Módulo 1: Fundamentos
                  </p>
                  <p className="text-xs text-success">Concluído</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Download className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="p-4 flex items-center justify-between opacity-50">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Módulo 2 (Bloqueado)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between opacity-50">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Certificado Final
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Complete todos os módulos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Configurações */}
        <section>
          <h2 className="font-semibold text-foreground mb-3">Configurações</h2>
          <div className="bg-card rounded-lg divide-y divide-border shadow-card">
            <button className="w-full p-4 flex items-center gap-3 text-left touch-feedback hover:bg-muted/50 transition-colors">
              <Settings className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Configurações</span>
            </button>

            <button className="w-full p-4 flex items-center gap-3 text-left touch-feedback hover:bg-muted/50 transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Notificações</span>
            </button>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkMode ? (
                  <Moon className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Sun className="w-5 h-5 text-muted-foreground" />
                )}
                <span className="text-sm text-foreground">Modo Escuro</span>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg text-muted-foreground">📏</span>
                <span className="text-sm text-foreground">Tamanho da Fonte</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleFontSizeChange(false)}
                  disabled={fontSize <= 14}
                >
                  A-
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleFontSizeChange(true)}
                  disabled={fontSize >= 22}
                >
                  A+
                </Button>
              </div>
            </div>

            <button className="w-full p-4 flex items-center gap-3 text-left touch-feedback hover:bg-muted/50 transition-colors">
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Ajuda e Suporte</span>
            </button>

            <button className="w-full p-4 flex items-center gap-3 text-left touch-feedback hover:bg-muted/50 transition-colors">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Política de Privacidade</span>
            </button>

            <button className="w-full p-4 flex items-center gap-3 text-left touch-feedback hover:bg-muted/50 transition-colors text-error">
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Sair</span>
            </button>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Perfil;
