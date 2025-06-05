
import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
  
  const skills: Skill[] = [
    { name: "VIBECODING", level: 40, category: "programming" },
    { name: "Python", level: 70, category: "programming" },
    { name: "Java", level: 75, category: "programming" },
    { name: "C", level: 65, category: "programming" },
    { name: "scikit-learn", level: 80, category: "ml" },
    { name: "pandas", level: 85, category: "ml" },
    { name: "matplotlib", level: 75, category: "ml" },
    { name: "SQL", level: 70, category: "ml" },
    { name: "FastAPI", level: 65, category: "backend" },
    { name: "Flask", level: 40, category: "backend" },
    { name: "React", level: 70, category: "frontend" },
    { name: "Flutter", level: 65, category: "frontend" },
    { name: "Android Studio", level: 60, category: "frontend" },
  ];
  
  const filterCategories = [
    { id: "all", label: "All Skills" },
    { id: "programming", label: "Programming" },
    { id: "ml", label: "ML & Data" },
    { id: "backend", label: "Backend" },
    { id: "frontend", label: "Frontend & Mobile" },
  ];
  
  useEffect(() => {
    if (activeFilter === "all") {
      setVisibleSkills(skills);
    } else {
      setVisibleSkills(skills.filter((skill) => skill.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary/50 to-background">
      <div className="container-section">
        <h2 className="section-title">My Skills</h2>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-2xl shadow-md card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
