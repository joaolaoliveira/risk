"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, Leaf } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 flex flex-col items-center p-4">
      <div className="flex-grow flex items-center justify-center w-full">
        <Card className="w-full max-w-md shadow-2xl border border-gray-200">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-2 text-green-600">
              <ShieldAlert className="w-8 h-8 mr-2" />
              <Leaf className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Sistema de Avaliação de Risco Ambiental
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Acesse a ferramenta para calcular riscos e gerenciar impactos ambientais.
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="E-mail institucional"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Acesso restrito — Projeto de Avaliação de Risco Ambiental.
            </p>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-auto text-xs text-muted-foreground text-center py-4">
        Desenvolvido por João Luiz Alves Oliveira
      </footer>
    </div>
  );
}
