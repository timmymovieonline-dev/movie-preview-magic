import { useEffect, useState } from "react";
import timmyLogo from "@/assets/timmy-logo.png";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground grain-overlay">
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <header className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={timmyLogo}
              alt="Timmy Movie Logo"
              className="w-full max-w-2xl h-auto mb-12 drop-shadow-2xl"
            />
            
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-4">
                Coming Soon
              </h1>
              
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              
              <p className="text-xl md:text-2xl font-bold text-foreground/90 mb-6">
                An 85 minute thrilling coming of age film
              </p>
            </div>
          </div>
        </header>

        {/* Synopsis Section */}
        <section
          className={`px-4 py-16 md:py-20 bg-primary/5 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p className="text-foreground/95">
                <span className="text-accent font-bold text-2xl">Timmy</span> is an 85 minute thrilling coming of age film about a gifted 17-year-old skateboarder who spends the summer filming with his idols's legendary team, only to uncover an industry where image trumps integrity—forcing him to choose between chasing the spotlight or staying true to the soul of skating.
              </p>
              
              <p className="text-foreground/90">
                When 17-year-old Timmy leaves his small Oregon town to spend the summer skating with Cake, an iconic Long Beach team led by his childhood idol, he believes he's entering a dream. But beneath the surface of magazine shoots and viral clips lies a world cracked by burnout, exploitation, and the quiet collapse of authenticity. As he films alongside a crew of raw, complex characters—each caught in the tug-of-war between art and commerce—Timmy begins to question what success really means.
              </p>
              
              <p className="text-foreground/90">
                By the time his footage premieres in the team's pivotal skate video, Timmy must confront a hard truth: the industry he once worshipped may not love him back, but the joy of skating might still be enough. TIMMY is a meditative coming-of-age story about identity, disillusionment, and finding purpose in a world that wants to package your passion.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`px-4 py-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
              Stay Tuned for Release Date
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
