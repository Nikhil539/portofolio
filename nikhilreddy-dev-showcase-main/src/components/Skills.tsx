import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C++", "Python", "Java", "SQL", "JavaScript", "C#"],
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      title: "Frameworks",
      icon: Globe,
      skills: ["Flask", "Streamlit", "React.js", "Node.js"],
      gradient: "from-neon-purple to-neon-cyan"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
      gradient: "from-neon-cyan to-neon-blue"
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["GitHub", "Postman", "VS Code", "Jupyter", "Docker"],
      gradient: "from-neon-blue to-neon-purple"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building robust, scalable, and innovative solutions across the full technology stack.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="group">
                <div className="glass-card p-6 rounded-2xl h-full transition-all duration-300 hover:scale-105 project-card">
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:pulse-glow transition-all duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="skill-badge text-center block"
                        style={{
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-accent">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Machine Learning",
              "Full-Stack Development",
              "RESTful APIs",
              "Microservices Architecture",
              "Cloud Computing",
              "DevOps",
              "Data Analysis",
              "Agile Methodology",
              "Problem Solving",
              "Team Leadership"
            ].map((competency, index) => (
              <span
                key={competency}
                className="skill-badge"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;