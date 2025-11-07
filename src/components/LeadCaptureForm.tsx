import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome muito longo" }),
  telefone: z
    .string()
    .trim()
    .min(10, { message: "Telefone inválido" })
    .max(20, { message: "Telefone inválido" })
    .regex(/^[\d\s()+-]+$/, { message: "Apenas números e símbolos de telefone" }),
});

type FormData = z.infer<typeof formSchema>;

export function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://n8n.digitalcurso.com.br/webhook/captura", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: data.nome,
          telefone: data.telefone,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar dados");
      }

      // Encode parameters for URL
      const encodedNome = encodeURIComponent(data.nome);
      const encodedTelefone = encodeURIComponent(data.telefone);
      
      // Redirect to Kiwify payment page
      window.location.href = `https://pay.kiwify.com.br/tvtu7mr?afid=q8AaANJT&name=${encodedNome}&phone=${encodedTelefone}`;
      
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Erro ao processar seus dados. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="nome" className="text-foreground font-medium">
          Seu Nome Completo *
        </Label>
        <Input
          id="nome"
          type="text"
          placeholder="Digite seu nome completo"
          {...register("nome")}
          className="h-14 text-lg border-2 border-border focus:border-primary transition-smooth"
          disabled={isSubmitting}
        />
        {errors.nome && (
          <p className="text-sm text-destructive">{errors.nome.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefone" className="text-foreground font-medium">
          Seu WhatsApp *
        </Label>
        <Input
          id="telefone"
          type="tel"
          placeholder="(00) 00000-0000"
          {...register("telefone")}
          className="h-14 text-lg border-2 border-border focus:border-primary transition-smooth"
          disabled={isSubmitting}
        />
        {errors.telefone && (
          <p className="text-sm text-destructive">{errors.telefone.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full h-16 text-xl font-bold gradient-gold hover:opacity-90 transition-smooth shadow-gold disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            Processando...
          </>
        ) : (
          "GARANTIR MEU ACESSO AGORA"
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Seus dados estão seguros e protegidos
      </p>
    </form>
  );
}
