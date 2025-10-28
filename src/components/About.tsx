const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 text-center animate-fade-in">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed animate-fade-in-up">
            <p>
              With a strong foundation in education and professional development, I bring dedication, 
              expertise, and a commitment to excellence in every endeavor.
            </p>
            <p>
              My journey encompasses continuous learning, skill development, and a passion for 
              contributing meaningfully to organizations and communities.
            </p>
            <p>
              I specialize in leveraging modern digital tools and methodologies to drive results 
              and foster growth in dynamic environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
