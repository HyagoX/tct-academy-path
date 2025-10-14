import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  modulo: {
    id: number;
    titulo: string;
    icone: string;
    cor: "primary" | "secondary" | "accent";
    progresso: number;
    horasCompletadas: number;
    horasTotais: number;
    desbloqueado: boolean;
    requisito?: string;
  };
  onClick: () => void;
}

const ModuleCard = ({ modulo, onClick }: ModuleCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-lg p-4 shadow-card",
        !modulo.desbloqueado && "opacity-60"
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="text-4xl">{modulo.icone}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{modulo.titulo}</h3>
        </div>
      </div>

      {modulo.desbloqueado ? (
        <>
          <ProgressBar progresso={modulo.progresso} cor={modulo.cor} />
          <p className="text-sm text-muted-foreground mt-2">
            {modulo.horasCompletadas}h / {modulo.horasTotais}h completadas
          </p>
          <Button
            onClick={onClick}
            className="w-full mt-4 touch-feedback"
            variant={modulo.progresso > 0 ? "default" : "outline"}
          >
            {modulo.progresso > 0 ? "Continuar" : "Começar"}
          </Button>
        </>
      ) : (
        <div className="text-center py-4">
          <Lock className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{modulo.requisito}</p>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;
