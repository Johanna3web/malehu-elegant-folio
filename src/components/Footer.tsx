const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Malehu Johanna Segoapa. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-80">
          Built with excellence and dedication
        </p>
      </div>
    </footer>
  );
};

export default Footer;
