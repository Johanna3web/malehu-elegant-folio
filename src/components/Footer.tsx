const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Malehu Johanna Segoapa. All Rights Reserved.
          </p>
          <p className="text-base font-heading italic opacity-90">
            "Learning never stops — growth is my journey."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
