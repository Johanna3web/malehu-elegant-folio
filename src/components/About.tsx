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
              I am Malehu Johanna Segoapa, a driven and forward-thinking professional with a strong foundation in Business Management and a passion for technology and digital transformation. I hold N4–N6 Business Management qualifications and a Full Stack Development Certificate from the FNB App Academy. Currently, I serve as a Digital Associate at CAPACITI, where I apply innovative solutions to business and digital challenges.
            </p>
            <p>
              With over 29 professional certifications from Coursera, including 12 in Artificial Intelligence, I bring expertise in AI/ML implementation, Web Development, React, JavaScript, Python, Data Analysis, and Business Management. I am committed to continuous learning and using digital innovation to improve business efficiency, enhance user experience, and drive organisational growth.
            </p>
            
            {/* Key Skills */}
            <div className="pt-4">
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">AI/ML Implementation</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">Web Development</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">React & JavaScript</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">Data Analysis</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">Business Management</span>
                <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
