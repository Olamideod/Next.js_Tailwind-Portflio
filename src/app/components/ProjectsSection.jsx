"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HarmoniFi - AI Powered Music APP",
    description: "HarmoniFi is a music recommendation web app powered by Flask for backend development and Next.js for the frontend. Flask handles routing, API endpoints, and recommendation logic, while Next.js renders UI components using React. The recommendation system utilizes scikit-learn for machine learning tasks. The app emphasizes seamless integration between backend and frontend, delivering a smooth user experience without the need for a database.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "AI/ML"],
    gitUrl: "https://github.com/Olamideod/HarmoniFi_AI_Powered_Music-App",
    previewUrl: "https://www.linkedin.com/posts/olamide-oluwamusiwa-17b62827a_alxse-softwaredevelopers-aispecialist-activity-7184453371905335296-_mt4?utm_source=share&utm_medium=member_ios",
  },
  {
    id: 2,
    title: "Cat vs Dog Image Classification using CNN",
    description: "This project utilizes TensorFlow and Keras for transfer learning to classify images of cats and dogs. Skills used; TensorFlow, Keras, Transfer Learning, Image Data Preprocessing, Model Evaluation, Model Deployment, and File Handling.",
    image: "/images/projects/2.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Olamideod/Dog-Cat_Image_classification",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "A visual stunning landing page featuring a responsive layout, popup modal functionality, dropdown navbar, dark and light mode options, scroll-triggered animations, fully responsive hero section, modern product cards, and a responsive footer, showcasing skills in React, Tailwind CSS, and Vercel.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Olamideod/Ecommerce_website",
    previewUrl: "https://ecommerce-site-omega-rose.vercel.app/",
  },
  {
    id: 4,
    title: "Music Recommendation Sytem using Deep Learning",
    description: "Using Pandas, NLTK, and sklearn, a song recommendation model was built to analyze Spotify data, featuring data preprocessing, TF-IDF vectorization, cosine similarity calculations, and a recommendation function, with results saved using pickle.",
    image: "/images/projects/4.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Olamideod/Music-Recommendation-System",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Churn Prediction Model",
    description: "A churn prediction model built in Python using Pandas, NumPy, and scikit-learn. Data preprocessing, resampling for class imbalance, and model training with Logistic Regression, SVM, Naive Bayes, XGBoost, and LightGBM were implemented. Hyperparameter tuning was done with GridSearchCV. The model achieved an accuracy of 84.14% and an ROC AUC score of 91.57% on test data.",
    image: "/images/projects/5.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Olamideod/churn-Prediction-Model",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "De-Fi App using React and TailwindCSS",
    description: "This project showcases a De-Fi (Decentralized Finance) app landing page built with React and TailwindCSS, deployed on Vercel.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Olamideod/DeFi-React-Tailwindcss-",
    previewUrl: "https://de-fi-react-tailwindcss.vercel.app",
  },
  {
    id: 7,
    title: "Portfolio Website using Nextjs and TailwindCSS",
    description: "This portfolio website utilizes Next.js, advanced Tailwind CSS, React, React Icons, and TypeScript to deliver a modern, responsive, visually captivating user experience, and Vercel for Deployment to production.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Olamideod/Next.js_Tailwind-Portflio",
    previewUrl: "https://olamide-portflio.vercel.app",
  },
  {
    id: 8,
    title: "A UNIX Command Interpreter using C Programming",
    description: "A UNIX command interpreter crafted for ALX's low-level programming track. It executes commands from files or standard input, featuring variable replacement and operator handling. With built-in commands like cd and exit, it offers a seamless interactive experience for executing UNIX commands effectively.",
    image: "/images/projects/8.png",
    tag: ["All", "Software"],
    gitUrl: "https://github.com/Olamideod/simple_shell",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software"
          isSelected={tag === "Software"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
          />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
