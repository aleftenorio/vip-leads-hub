import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import logo from "@/assets/logo.webp";
import heroImage from "@/assets/hero-image.webp";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <main className="relative z-10">
        {/* Header */}
        <header className="py-6 px-4 md:py-8">
          <div className="container mx-auto flex justify-center">
            <img 
              src={logo} 
              alt="Efeito Lipo HD - Viviane Moreno" 
              className="h-16 md:h-20 w-auto animate-scale-in"
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-8 px-4 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Form */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                    VOCÊ ESTÁ A UM PASSO DE{" "}
                    <span className="gradient-gold bg-clip-text text-transparent">
                      AUMENTAR SEU FATURAMENTO
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                    Preencha os seus dados para acessar o método completo
                  </p>

                  <div className="flex items-center gap-3 text-foreground">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i} 
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium">
                      +1.247 alunas transformando suas carreiras
                    </p>
                  </div>
                </div>

                <LeadCaptureForm />

                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div className="text-center space-y-1 p-4 bg-card rounded-xl shadow-soft">
                    <p className="text-2xl md:text-3xl font-bold gradient-gold bg-clip-text text-transparent">
                      5-10K
                    </p>
                    <p className="text-xs text-muted-foreground">
                      faturamento/mês
                    </p>
                  </div>
                  <div className="text-center space-y-1 p-4 bg-card rounded-xl shadow-soft">
                    <p className="text-2xl md:text-3xl font-bold gradient-gold bg-clip-text text-transparent">
                      100%
                    </p>
                    <p className="text-xs text-muted-foreground">
                      prático
                    </p>
                  </div>
                  <div className="text-center space-y-1 p-4 bg-card rounded-xl shadow-soft">
                    <p className="text-2xl md:text-3xl font-bold gradient-gold bg-clip-text text-transparent">
                      1 Sessão
                    </p>
                    <p className="text-xs text-muted-foreground">
                      resultados
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative animate-scale-in hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-gold">
                  <img 
                    src={heroImage}
                    alt="Método Imediato - Viviane Moreno" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-60 -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-60 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 px-4 bg-card/50 backdrop-blur">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full gradient-gold flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Método Comprovado</h3>
                <p className="text-sm text-muted-foreground">
                  Técnicas validadas por milhares de profissionais
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full gradient-gold flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Resultados Rápidos</h3>
                <p className="text-sm text-muted-foreground">
                  Transformação visível em uma única sessão
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full gradient-gold flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Suporte Total</h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhamento e mentoria especializada
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-muted-foreground">
        <p>© 2024 Efeito Lipo HD - Viviane Moreno. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
