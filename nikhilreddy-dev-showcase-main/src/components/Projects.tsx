import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, BarChart, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Natural Disaster Forecasting",
      description: "Advanced machine learning system that predicts earthquakes, floods, and droughts with 98%+ accuracy. Features real-time data processing and interactive Streamlit dashboard for comprehensive disaster monitoring.",
      icon: Brain,
      techStack: ["Python", "Machine Learning", "Streamlit", "Pandas", "Scikit-learn"],
      github: "https://github.com/Nikhil539",
      live: "#",
      gradient: "from-neon-blue to-neon-purple",
      features: ["98%+ Prediction Accuracy", "Real-time Data Processing", "Interactive Dashboard", "Multiple Disaster Types"]
    },
    {
      title: "Telecom Churn Prediction",
      description: "Intelligent customer retention system using AdaBoost algorithm to predict and prevent customer churn. Deployed with Flask REST API for seamless integration with business systems.",
      icon: BarChart,
      techStack: ["Python", "AdaBoost", "Flask", "REST API", "Data Analytics"],
      github: "https://github.com/Nikhil539",
      live: "#",
      gradient: "from-neon-purple to-neon-cyan",
      features: ["AdaBoost Algorithm", "Flask API Deployment", "Customer Analytics", "Retention Insights"]
    },
    {
      title: "B2B Inventory Management",
      description: "Comprehensive MERN stack solution for B2B inventory and order management. Features JWT authentication, real-time tracking, and advanced logistics management for enterprise operations.",
      icon: ShoppingCart,
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "Material-UI"],
      github: "https://github.com/Nikhil539",
      live: "#",
      gradient: "from-neon-cyan to-neon-blue",
      features: ["Real-time Tracking", "JWT Security", "Order Management", "Logistics Integration"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions showcasing expertise in machine learning, full-stack development, 
            and cutting-edge technologies that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={project.title} className="group">
                <div className="glass-card p-8 rounded-2xl h-full project-card">
                  {/* Project Icon & Title */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center pulse-glow`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="text-xs text-muted-foreground bg-bg-tertiary rounded-lg px-3 py-2">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <Button
                      asChild
                      className="btn-neon flex-1 group/btn"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="glass-card hover:bg-card-hover flex-1 group/btn"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button asChild className="btn-neon px-8 py-4 text-lg">
            <a href="https://github.com/Nikhil539" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;