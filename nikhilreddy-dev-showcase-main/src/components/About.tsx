import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate software developer with expertise in machine learning and full-stack development, 
            dedicated to creating innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Introduction */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-accent">Introduction</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Computer Science Engineering student specializing in IoT & Automation at Sathyabama University. 
                My journey in technology is driven by curiosity and a passion for solving complex problems through innovative solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive on the intersection of machine learning and web development, creating applications that not only 
                perform well but also provide exceptional user experiences. My goal is to leverage technology to build 
                solutions that have a meaningful impact on people's lives.
              </p>
            </div>
          </div>

          {/* Education & Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-accent">Education & Experience</h3>
            
            {/* Timeline Item 1 */}
            <div className="relative pl-8 pb-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full pulse-glow"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-primary to-transparent"></div>
              
              <div className="glass-card p-6 rounded-xl ml-4">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Engineering</h4>
                    <p className="text-primary font-medium">Computer Science Engineering - IoT & Automation</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Sathyabama University</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - 2026</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  Focusing on IoT systems, automation technologies, and advanced software development practices.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 pb-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full pulse-glow"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-secondary to-transparent"></div>
              
              <div className="glass-card p-6 rounded-xl ml-4">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Team Lead</h4>
                    <p className="text-secondary font-medium">Hackathon Club</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>2023 - 2026</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  Leading innovative project development and mentoring students in competitive programming and hackathons.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-neon-cyan rounded-full pulse-glow"></div>
              
              <div className="glass-card p-6 rounded-xl ml-4">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="h-5 w-5 text-neon-cyan mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Student Coordinator</h4>
                    <p className="text-neon-cyan font-medium">Soft Skills Club</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>2023 - 2026</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  Coordinating workshops and events to enhance communication and leadership skills among students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;