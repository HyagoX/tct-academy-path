import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progresso: number;
  cor?: "primary" | "secondary" | "accent";
  altura?: "sm" | "md" | "lg";
  mostrarTexto?: boolean;
  className?: string;
}

const ProgressBar = ({
  progresso,
  cor = "primary",
  altura = "md",
  mostrarTexto = true,
  className,
}: ProgressBarProps) => {
  const alturas = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-3",
  };

  const cores = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  return (
    <div className={cn("space-y-1", className)}>
      <div className={cn("w-full bg-muted rounded-full overflow-hidden", alturas[altura])}>
        <div
          className={cn("h-full rounded-full transition-all duration-500", cores[cor])}
          style={{ width: `${Math.min(progresso, 100)}%` }}
        />
      </div>
      {mostrarTexto && (
        <p className="text-xs text-muted-foreground text-right">{progresso}%</p>
      )}
    </div>
  );
};

export default ProgressBar;
