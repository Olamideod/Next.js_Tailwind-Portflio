"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2" style={{ lineHeight: "1.5", fontFamily: 'Georgia, serif', color: 'white' }}>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'Purple', fontWeight: "bold" }}>Programming:</span> <span style={{ fontWeight: "normal" }}>Proficient in various programming languages, including but not limited to Python, JavaScript, C#, and C++.</span></li>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'purple', fontWeight: "bold" }}>AI Techniques:</span> <span style={{ fontWeight: "normal" }}>Skilled in applying artificial intelligence techniques, including machine learning, natural language processing (NLP), computer vision, and deep learning.</span></li>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'purple', fontWeight: "bold" }}>Web Development:</span> <span style={{ fontWeight: "normal" }}>Experienced in building web development projects using HTML, CSS, JavaScript, and frameworks such as React, tailwindCSS for the front end, and Next.js, Django, Flask for the back end.</span></li>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'purple', fontWeight: "bold" }}>Software Development:</span> <span style={{ fontWeight: "normal" }}>Competent in software development methodologies, design patterns, algorithms, data structures, and version control using Git.</span></li>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'purple', fontWeight: "bold" }}>Integration of AI:</span> <span style={{ fontWeight: "normal" }}>Expertise in integrating AI techniques and models into software and web projects effectively.</span></li>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'purple', fontWeight: "bold" }}>Machine Learning:</span> <span style={{ fontWeight: "normal" }}>Proficient in data analysis, statistical modeling, data visualization, and manipulation using libraries and frameworks such as pandas, NumPy, TensorFlow, Matplotlib, and seaborn.</span></li>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'purple', fontWeight: "bold" }}>Problem-Solving:</span> <span style={{ fontWeight: "normal" }}>Strong problem-solving skills, capable of analyzing complex problems and devising effective solutions using programming, AI, and data science techniques.</span></li>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'purple', fontWeight: "bold" }}>Interdisciplinary Background:</span> <span style={{ fontWeight: "normal" }}>Possessing an interdisciplinary background that allows you to bridge gaps between different domains effectively.</span></li>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'purple', fontWeight: "bold" }}>Communication:</span> <span style={{ fontWeight: "normal" }}>Strong communication skills to collaborate with team members, explain technical concepts to non-technical stakeholders, and document work effectively.</span></li>
  <li style={{ marginBottom: "0.7rem", fontWeight: "bold" }}><span style={{ color: 'purple', fontWeight: "bold" }}>Continuous Learning:</span> <span style={{ fontWeight: "normal" }}>Willingness to stay updated with the latest trends, technologies, and best practices in AI, data science, Machine Learning web development, and software engineering.</span></li>
</ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ondo State University Of Science and Technology, Okitipupa</li>
        <li>Holberton School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-blue" id="about">
      <div className="md:grid md:grid-cols-2 gap-10 items-top py-2 px-2 xl:gap-12 sm:py-16 xl:px-8">
        <Image src="/images/about-image.png" alt="Description of the image" width={1200} height={1500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full"> 
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="list-disc pl-2" style={{ lineHeight: "1.5", fontFamily: 'Georgia, serif'  }}>
            I am Olamide (David) Oluwamusiwa, a dedicated full-stack software engineer with a passion for AI and data science. I excel in programming and AI techniques, with experience in building web development projects, machine learning, and software development. Additionally, I have expertise in integrating AI into my software and web projects, aiming to create intelligent systems that solve real-world problems. With my interdisciplinary background, I aspire to push the boundaries of technology and shape a future where intelligent machines enhance the human experience.
          </p>
          <div className="flex flex-row justify-start mt-10">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
