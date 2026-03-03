import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center animate-fade-in">
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
              Data Engineering Associate with a background in Business Management and a passion for technology, digital transformation, and data-driven problem solving. I hold N4–N6 Business Management qualifications and a Full Stack Development Certificate from the FNB App Academy.
            </p>
            <p>
              I design and support data solutions, manage pipelines and datasets, and turn raw data into actionable insights. I've further strengthened my skills through Coursera certifications in AI and the SFIA-aligned Data Engineering pathway.
            </p>
            <p>
              I'm curious, growth-driven, and committed to using data and technology to create practical solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
