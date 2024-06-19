import React from "react";

const ProjectCard = ({ name, tools, src }) => {
  return (
    <div className="projects-card thq-card thq-flex-column" style={{cursor: 'pointer'}} onClick={() => {window.open(`https://github.com/SuicideG4M3R/${name}`, "_blank")}}>
      <img alt={name} src={src} className="projects-image thq-img-ratio-1-1 thq-img-round"/>
      <h2 className="projects-name thq-heading-2">{name}</h2>
      <span className="projects-text thq-body-small">{tools}</span>
  </div>
  );
};

const projects = {
GameStats: {
    name: 'GameStats',
    tools: 'Django Python SQL HTML/CSS JavaScript',
    src: '../../../public/assets/img/img2.jpg'
  },
  CharityDonations: {
    name: 'CharityDonations',
    tools: 'Django Python SQL HTML/CSS JavaScript',
    src: '../../../public/assets/img/img1.jpg'
  },
  WebScrapperPY: {
    name: 'WebScrapperPY',
    tools: 'Python',
    src: '../../../public/assets/img/img4.png'
  },
  Portfolio: {
    name: 'Portfolio',
    tools: 'React JavaScript HTML/CSS',
    src: '../../../public/assets/img/img5.png'
  },
  FlaskCRUD: {
    name: 'FlaskCRUD',
    tools: 'Flask Python SQLAlchemy',
    src: '../../../public/assets/img/img6.png'
  },
}

const ProjectList = () => {
  return (
    <div className="projects-container thq-grid-auto-300 thq-grid-3">
      {Object.keys(projects).map(key => {
        const project = projects[key];
        return (
          <ProjectCard
            key={project.name}
            name={project.name}
            tools={project.tools}
            src={project.src}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;

