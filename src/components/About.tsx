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
              I'm a dedicated Data Engineering Associate with a strong background in Business Management and a real passion for technology, digital transformation, and solving problems with data. I hold N4–N6 Business Management qualifications and a Full Stack Development Certificate from the FNB App Academy, which helped me build both business insight and technical expertise.
            </p>
            <p>
              I'm currently working as a Data Engineering Associate at CAPACITI, where I design and support data solutions, work with pipelines, manage datasets, and help turn raw data into reliable, actionable insights for better decision-making. Before this role, I worked as a Digital Associate, where I developed my foundation in data, technology, and digital tools while supporting business and innovation projects.
            </p>
            <p>
              I've invested heavily in continuous learning through Coursera, completing multiple certifications in Artificial Intelligence as well as the SFIA-aligned Data Engineering pathway, which strengthened my skills in building, managing, and optimising data systems.
            </p>
            <p>
              Above all, I'm curious, growth-driven, and committed to using data and technology to create practical solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
