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
        {/* Hero Section with Background */}
        <section 
          className="min-h-screen py-8 px-4 md:py-16 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${headerBg})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          
          <div className="container mx-auto max-w-2xl relative z-10">
            {/* Logo */}
            <div className="flex justify-center mb-12">
              <img 
                src={logo} 
                alt="Método Imediato - Viviane Moreno" 
                className="h-16 md:h-20 w-auto animate-scale-in"
              />
            </div>

            {/* Content */}
            <div className="space-y-8 animate-fade-in text-center">
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
    </div>
  );
};

export default Index;
