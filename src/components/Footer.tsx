
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gradient-to-b from-background to-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          &copy; {currentYear} Maram Vijayreddy. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-muted-foreground/80">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
