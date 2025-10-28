import { useState } from "react";
import ImageUpload from "./ImageUpload";

const About = () => {
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12 text-center animate-fade-in">
          About Me
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            {profileImageUrl ? (
              <img
                src={profileImageUrl}
                alt="Malehu Johanna Segoapa"
                className="rounded-2xl shadow-elegant max-w-sm w-full object-cover"
              />
            ) : (
              <div className="w-full max-w-sm">
                <ImageUpload
                  bucket="profile-pictures"
                  onUploadComplete={setProfileImageUrl}
                  label="Upload Profile Picture"
                />
              </div>
            )}
          </div>

          {/* Bio Text */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed animate-fade-in-up">
            <p>
              I'm Malehu Johanna Segoapa — a driven and forward-thinking professional with a background in Business Management and a passion for technology.
            </p>
            <p>
              After completing my N4–N6 Business Management qualifications and the FNB App Academy in 2025, I've continued to work through my role as a Digital Associate at Capaciti.
            </p>
            <p>
              With over 29 professional certifications from Coursera — including 12 in Artificial Intelligence — I'm committed to lifelong learning and using digital innovation to create meaningful business solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
