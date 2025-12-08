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
              I am Malehu Johanna Segoapa, a dedicated Data Analyst with a strong background in Business Management and a passion for technology and digital transformation. I hold N4–N6 Business Management qualifications and a Full Stack Development Certificate from the FNB App Academy. I currently work as a Data Analyst and Digital Associate at CAPACITI, where I use data, technology, and innovative thinking to solve business challenges and support digital growth.
            </p>
            <p>
              I have completed over 29 professional certifications on Coursera, including 12 focused on Artificial Intelligence. My technical skills include Data Analysis, Python, SQL, Machine Learning, Data Visualisation, Dashboard Development, Web Development, React, and JavaScript.
            </p>
            <p>
              I enjoy transforming data into meaningful insights, creating visual stories through dashboards, improving business processes, and exploring how AI can enhance decision-making and user experience. I am committed to continuous learning, digital innovation, and delivering solutions that drive business efficiency and organisational impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
