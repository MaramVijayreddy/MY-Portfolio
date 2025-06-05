
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container-section">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg">
              I'm a 3rd-year B.Tech student specializing in AI & ML at NNRG with a CGPA of 8.5. 
              I'm passionate about machine learning, natural language processing, and full-stack development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-hover bg-card p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold text-xl mb-3">Education</h3>
                <p>B.Tech in AI & ML</p>
                <p className="text-muted-foreground">NNRG, 2022-2026</p>
                <p className="mt-2">CGPA: 8.5</p>
              </div>
              <div className="card-hover bg-card p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold text-xl mb-3">Languages</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Telugu (Native)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Hindi (Fluent)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>English (Proficient)</span>
                  </li>
                </ul>
              </div>
              <div className="card-hover bg-card p-6 rounded-2xl shadow-md md:col-span-2">
                <h3 className="font-semibold text-xl mb-3">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-secondary p-3 rounded-lg text-center">Communication</div>
                  <div className="bg-secondary p-3 rounded-lg text-center">Teamwork</div>
                  <div className="bg-secondary p-3 rounded-lg text-center">Problem-solving</div>
                  <div className="bg-secondary p-3 rounded-lg text-center">Adaptability</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
             // src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format"
              src="20250205_115119.jpg"
              alt="Coding"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
