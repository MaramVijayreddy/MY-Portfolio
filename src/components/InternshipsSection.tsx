
import { Calendar, Briefcase } from "lucide-react";

const InternshipsSection = () => {
  const internships = [
    {
      id: 1,
      title: "GenAI Internship",
      company: "Eduskills + Google Cloud",
      period: "Jul–Sep 2024",
      description:
        "Worked on Generative AI solutions using Google Cloud services.",
      skills: ["Google Cloud", "Gen AI", "ML Models"],
      isActive: true,
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Code Tech IT Solutions",
      period: "Apr–May 2025",
      description:
        "Processed and visualized real-world datasets using Pandas and SQL to generate actionable insights.",
      skills: ["Data Analysis", "Pandas", "SQL", "Visualization"],
      isActive: false,
    },
  ];

  return (
    <section id="internships" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container-section">
        <h2 className="section-title">Internships</h2>
        
        <div className="relative">
          {/* Timeline stem */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
          
          {/* Internships timeline */}
          <div className="space-y-12 relative">
            {internships.map((internship, index) => (
              <div
                key={internship.id}
                className={`md:pl-16 relative ${
                  index === 0 ? "animate-fade-in" : "animate-fade-in"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot for desktop */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hidden md:flex">
                  <Briefcase size={16} />
                </div>
                
                <div className="bg-card rounded-2xl p-6 shadow-md card-hover">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold">{internship.title}</h3>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {internship.company}
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{internship.period}</span>
                    </div>
                  </div>
                  
                  <p className="mb-4">{internship.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {internship.isActive && (
                    <div className="absolute top-4 right-4">
                      <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
