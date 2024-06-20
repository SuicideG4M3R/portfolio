import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ url, title, text }) => {
    return (
        <Link to={url} className=""><div className="projects-fun-li">
            <h3 className="projects-fun-heading6 thq-heading-3">
                {title}</h3>
            <p className="thq-body-small">
                {text}</p></div>
        </Link>
    );
};

const funProjects = {
    crazyDiv: {
        url: 'crazy-div',
        title: 'CrazyDiv',
        text: 'Box randomly jumping and running away from cursor'
    },
    counter: {
        url: 'counter',
        title: 'Counter',
        text: 'Count up and down'
    }
}

const FunProjectList = () => {
    return (
        <ul className="projects-fun-ul thq-grid-auto-300 thq-grid-3">
        {Object.keys(funProjects).map(key => {
          const project = funProjects[key];
          return (
            <ProjectCard
              key={project.url}
              url={project.url}
              title={project.title}
              text={project.text}
            />
          );
        })}
      </ul>
    );
  };

  export default FunProjectList;