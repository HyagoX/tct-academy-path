import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Aprender from "./pages/Aprender";
import Simular from "./pages/Simular";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Inicializa verificando localStorage diretamente para evitar loop
  const [showOnboarding, setShowOnboarding] = useState(() => {
    const hasCompletedOnboarding = localStorage.getItem("tct_onboarding_complete");
    return !hasCompletedOnboarding;
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {showOnboarding ? (
              <>
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="*" element={<Navigate to="/onboarding" replace />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/aprender" element={<Aprender />} />
                <Route path="/simular" element={<Simular />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/onboarding" element={<Navigate to="/" replace />} />
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
