import React from 'react'; 
import './Thumbnail.css';
 
function Thumbnail(props) {
  return (
    <div className="thumbContainer">
      <a href={props.link}>
        <div className="projectThumbImg">
          <img src={props.image} alt="projects"/>
        </div>
        <div className="project-title"><p>{props.title}</p></div>
        <div className="project-category"><p>{props.category}</p></div>
      </a>
    </div>
  );
}
 
export default Thumbnail;
