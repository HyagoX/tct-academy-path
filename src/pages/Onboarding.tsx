import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    emoji: "😰",
    titulo: "33 milhões de brasileiros excluídos digitalmente",
    texto: "A tecnologia avança rápido demais. Muitos ficam para trás.",
  },
  {
    emoji: "🤝",
    titulo: "Transforme Empatia em Profissão",
    texto: "Seja um Tradutor de Complexidade Tecnológica e ajude pessoas a dominarem o digital.",
  },
  {
    emoji: "📜",
    titulo: "Certificação em 180 Horas",
    texto: "Aprenda a traduzir tecnologia para linguagem humana através de módulos práticos.",
  },
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleStart = () => {
    if (nome.trim()) {
      localStorage.setItem("tct_user_name", nome);
      localStorage.setItem("tct_onboarding_complete", "true");
      navigate("/");
    }
  };

  const handleSkip = () => {
    localStorage.setItem("tct_onboarding_complete", "true");
    navigate("/");
  };

  if (currentSlide < slides.length) {
    const slide = slides[currentSlide];
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 animate-fade-in">
        <div className="w-full max-w-md space-y-8 text-center">
          <div className="text-8xl mb-8 animate-scale-in">{slide.emoji}</div>
          <h1 className="text-2xl font-bold text-foreground animate-slide-up">
            {slide.titulo}
          </h1>
          <p className="text-lg text-muted-foreground animate-slide-up">
            {slide.texto}
          </p>

          <div className="flex gap-2 justify-center pt-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-8">
            <Button
              onClick={handleNext}
              size="lg"
              className="w-full touch-feedback"
            >
              Próximo
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={handleSkip}
              variant="ghost"
              className="touch-feedback"
            >
              Pular tutorial
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="text-8xl mb-8 animate-scale-in">👋</div>
        <h1 className="text-2xl font-bold text-foreground">
          Pronto para Começar?
        </h1>
        <p className="text-lg text-muted-foreground">
          Vamos personalizar sua experiência
        </p>

        <div className="space-y-4 pt-4">
          <Input
            type="text"
            placeholder="Qual seu nome?"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="text-lg h-14 text-center"
            autoFocus
          />

          <Button
            onClick={handleStart}
            size="lg"
            className="w-full touch-feedback"
            disabled={!nome.trim()}
          >
            Começar Minha Jornada
          </Button>

          <Button
            onClick={handleSkip}
            variant="ghost"
            className="touch-feedback"
          >
            Pular tutorial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
