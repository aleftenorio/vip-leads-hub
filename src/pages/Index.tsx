import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import logo from "@/assets/logo.webp";
import headerBg from "@/assets/header-bg.webp";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <main className="relative z-10">
        {/* Header with subtle banner */}
        <header 
          className="relative py-8 px-4 md:py-12 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-background/85" />
          
          <div className="container mx-auto max-w-2xl relative z-10 text-center space-y-6">
            {/* Logo */}
            <div className="flex justify-center">
              <img 
                src={logo} 
                alt="Método Imediato - Viviane Moreno" 
                className="h-16 md:h-20 w-auto animate-scale-in"
              />
            </div>
            
            {/* Header tagline */}
            <h2 className="text-xl md:text-2xl font-medium text-foreground">
              Você está a um passo de conquistar mais clientes
            </h2>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 px-4 md:py-16">
          <div className="container mx-auto max-w-2xl">
            {/* Content */}
            <div className="space-y-8 animate-fade-in text-center">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                  PREENCHA SEUS DADOS E{" "}
                  <span className="gradient-gold bg-clip-text text-transparent">
                    AUMENTE SEU FATURAMENTO
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  Acesse o método completo agora
                </p>

                <div className="flex items-center justify-center gap-3 text-foreground">
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

              {/* Form - centered */}
              <div className="flex justify-center">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-4 text-center text-sm text-muted-foreground">
        <p>© 2024 Método Imediato - Viviane Moreno. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
