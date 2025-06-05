
import { useState } from "react";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const certificates = [
    {
      id: 1,
      name: "Prolog Certification",
      issuer: "LogicPro Academy",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format",
    },
    {
      id: 2,
      name: "Data Analytics with Python",
      issuer: "CodeTch IT Solutions",
      date: "May 2025",
      image: "Codetech_DA_CERTIFICATE.jpg",
    },
    {
      id: 3,
      name: "GenAI Certification",
      issuer: "Google Cloud & Eduskills",
      date: "September 2024",
      image: "Eduksills_certificate_GenAi.jpg",
    },
    {
      id: 4,
      name: "Data Analytics with Python",
      issuer: "NPTEL_SWAYAM",
      date: "May 2025",
      image: "NPTEL_DA_CERTIFICATE.jpg",
     
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container-section">
        <h2 className="section-title">Certifications</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl aspect-video bg-card shadow-lg mb-8">
            <div
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {certificates.map((cert) => (
                <div key={cert.id} className="min-w-full h-full relative">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{cert.name}</h3>
                    <div className="flex justify-between items-center">
                      <p>{cert.issuer}</p>
                      <p>{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
              onClick={() => setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
              onClick={() => setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))}
            >
              &#10095;
            </button>
          </div>
          
          {/* Thumbnails */}
          <div className="flex justify-center gap-4">
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                onClick={() => setActiveIndex(index)}
                className={`p-4 flex flex-col items-center rounded-lg transition-all ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground scale-105"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                <Award size={24} />
                <span className="text-sm font-medium mt-1">{cert.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
