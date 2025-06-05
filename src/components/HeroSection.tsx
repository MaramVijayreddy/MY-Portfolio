
import { ArrowRight, Download, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-secondary/40">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-lg font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold">
              Maram VijayReddy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
               Aspiring AI/ML Engineer
            </p>
            <p className="text-lg max-w-lg">
              Passionate about Building intelligent systems & data-driven solutions
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#"
                className="btn-primary inline-flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume download functionality will be added soon!");
                }}
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/vijayreddy-maram-74843032b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-[#0A66C2] inline-flex items-center gap-2"
              >
                <Linkedin size={18} /> Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  //src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format"
                  src="IMG-20250531-WA0021.jpg"
                  alt="Profile"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowRight className="transform rotate-90" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
