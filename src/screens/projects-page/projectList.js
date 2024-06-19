import React from "react";

const ProjectCard = ({ name, tools }) => {
  return (
    <div className="projects-card thq-card thq-flex-column" style={{cursor: 'pointer'}} onClick={() => {window.open(`https://github.com/SuicideG4M3R/${name}`, "_blank")}}>
      <div className={`projects-image thq-img-ratio-1-1 thq-img-round ${name}`}></div>
      <h2 className="projects-name thq-heading-2">{name}</h2>
      <span className="projects-text thq-body-small">{tools}</span>
  </div>
  );
};

const projects = {
GameStats: {
    name: 'GameStats',
    tools: 'Django Python SQL HTML/CSS JavaScript',
  },
  CharityDonations: {
    name: 'CharityDonations',
    tools: 'Django Python SQL HTML/CSS JavaScript',
  },
  WebScrapperPY: {
    name: 'WebScrapperPY',
    tools: 'Python',
  },
  Portfolio: {
    name: 'Portfolio',
    tools: 'React JavaScript HTML/CSS',
  },
  FlaskCRUD: {
    name: 'FlaskCRUD',
    tools: 'Flask Python SQLAlchemy',
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
          />
        );
      })}
    </div>
  );
};

export default ProjectList;

