import { useState } from "react";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Crop Recommendation System",
      category: "ML",
      description:
        "A machine learning application recommending optimal crops based on soil and weather inputs.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format",
      technologies: ["Python", "FastAPI", "scikit-learn"],
      githubUrl: "#", // Add GitHub repo if available
      demoUrl: "https://agri-wise-crop-advisor.vercel.app/", // ✅ Live demo link added
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="container-section">
        <h2 className="section-title">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-secondary rounded-lg">
            <button
              onClick={() => setFilter("All")}
              className={`px-4 py-2 rounded-md ${
                filter === "All"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary/80"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("ML")}
              className={`px-4 py-2 rounded-md ${
                filter === "ML"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary/80"
              }`}
            >
              ML Projects
            </button>
            <button
              onClick={() => setFilter("Web")}
              className={`px-4 py-2 rounded-md ${
                filter === "Web"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary/80"
              }`}
            >
              Web Apps
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-colors"
                    aria-label="View Live Demo"
                  >
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
