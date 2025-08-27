import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add the actual resume file
    link.download = 'Nikhil_Reddy_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting */}
        <div className="mb-6">
          <span className="text-lg text-muted-foreground">Hi, I'm</span>
        </div>

        {/* Name with Gradient */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
          Nikhil Reddy
        </h1>

        {/* Role Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="skill-badge">Software Developer</span>
          <span className="skill-badge">ML Enthusiast</span>
          <span className="skill-badge">Full-Stack Engineer</span>
        </div>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about building innovative solutions with cutting-edge technology. 
          Specialized in machine learning, full-stack development, and creating impactful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="btn-neon px-8 py-4 text-lg font-semibold min-w-[200px]"
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            onClick={downloadResume}
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold min-w-[200px] glass-card hover:bg-card-hover"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/Nikhil539" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-card-hover transition-all duration-300 hover:scale-110 hover:shadow-neon rounded-lg"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6 text-foreground" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nikhil-reddy-5a4b38262/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-card-hover transition-all duration-300 hover:scale-110 hover:shadow-neon rounded-lg"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6 text-foreground" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;