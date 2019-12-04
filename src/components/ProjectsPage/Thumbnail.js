import React, {Component} from 'react'; 
import './Thumbnail.scss';
 
class Thumbnail extends Component {

  constructor(props) {
  	super(props);
    this.state = { flipped: null };
  }

  mouseOut() {
    // console.log("Mouse out!!!");
    this.setState({flipped: false});
  }
  
  mouseOver() {
    // console.log("Mouse over!!!");
    this.setState({flipped: true});
  }

render() {
  const {link, image} = this.props;
  return (
    <div className="thumbContainer">
    <a href={link}>
      <div className="projectThumbImg" onMouseOut={()=> this.mouseOut()} onMouseOver={() => this.mouseOver()}>
     {this.state.flipped && <div className="hoverTop">
     <p>hello</p>
     </div>} 
        <img src={image} alt="projects"/>
      </div>
    </a>
  </div>
  )
}
}

 
export default Thumbnail;
