import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          About Me
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <img
              src={profilePhoto}
              alt="Malehu Johanna Segoapa"
              className="rounded-2xl shadow-elegant max-w-sm w-full object-cover"
            />
          </div>

          {/* Bio Text */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed animate-fade-in-up">
            <p>
              I'm Malehu Johanna Segoapa, a driven and forward-thinking professional with a background in Business Management and a passion for technology.
            </p>
            <p>
              After completing my N4 to N6 Business Management qualifications and the FNB App Academy in 2025, I've continued to work through my role as a Digital Associate at CAPACITI.
            </p>
            <p>
              With over 29 professional certifications from Coursera, including 12 in Artificial Intelligence, I'm committed to lifelong learning and using digital innovation to create meaningful business solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
