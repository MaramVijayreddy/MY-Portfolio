
import { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }
    
    // Mock form submission - in a real app, this would send data to a server
    setFormStatus({
      type: "success",
      message: "Thank you! Your message has been received.",
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        type: null,
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/50 to-background">
      <div className="container-section">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              Feel free to reach out if you're looking for a passionate AI/ML developer or if you have any questions!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:maramvijayreddy893@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    maramvijayreddy893@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="tel:+917794015284"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7794015284
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/vijayreddy-maram-74843032b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-[#0A66C2] w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/MaramVijayreddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="bg-[#24292e] w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="font-semibold text-xl mb-6">Send Me a Message</h3>
            
            {formStatus.type && (
              <div
                className={`p-4 mb-6 rounded-lg ${
                  formStatus.type === "success"
                    ? "bg-green-500/10 text-green-600 dark:text-green-400"
                    : "bg-red-500/10 text-red-600 dark:text-red-400"
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
