import { Award, Code, Cloud, Zap } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Woodpecker Hackathon",
      issuer: "Certified Participant",
      icon: Zap,
      type: "Hackathon",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      title: "NammaYatri Mobility Challenge",
      issuer: "Certified Participant", 
      icon: Code,
      type: "Competition",
      gradient: "from-neon-purple to-neon-cyan"
    },
    {
      title: "Software Conceptual Design",
      issuer: "NPTEL Certification",
      icon: Award,
      type: "Course",
      gradient: "from-neon-cyan to-neon-blue"
    },
    {
      title: "Cloud IoT Edge ML",
      issuer: "NPTEL Certification",
      icon: Cloud,
      type: "Specialization",
      gradient: "from-neon-blue to-neon-purple"
    }
  ];

  const leadership = [
    {
      role: "Team Lead",
      organization: "Hackathon Club",
      period: "2023 - 2026",
      description: "Leading innovative project development and mentoring students in competitive programming",
      achievements: ["Organized 5+ hackathons", "Mentored 50+ students", "Led winning teams"]
    },
    {
      role: "Student Coordinator",
      organization: "Soft Skills Club", 
      period: "2023 - 2026",
      description: "Coordinating workshops and events to enhance communication and leadership skills",
      achievements: ["Coordinated 10+ workshops", "Improved student engagement by 40%", "Enhanced communication skills"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Certifications Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development through competitions, certifications, and hands-on experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={cert.title} className="group">
                  <div className="glass-card p-6 rounded-2xl h-full transition-all duration-300 hover:scale-105 project-card">
                    <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center pulse-glow`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-xs text-accent font-semibold uppercase tracking-wide">
                        {cert.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Leadership Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building teams, driving innovation, and fostering growth through collaborative leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((role, index) => (
              <div key={role.role} className="group">
                <div className="glass-card p-8 rounded-2xl h-full project-card">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{role.role}</h3>
                      <span className="text-sm text-accent font-medium">{role.period}</span>
                    </div>
                    <p className="text-primary font-semibold mb-4">{role.organization}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{role.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {role.achievements.map((achievement) => (
                        <li key={achievement} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;