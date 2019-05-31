import React from "react";
import Axios from "axios";
import ReactPlayer from 'react-player';

import '../../node_modules/video-react/dist/video-react.css';
import '../static/css/content.css';


export default class Content extends React.Component {
  state = {
    videos: []
  }
  componentDidMount() {
    Axios.get(`/videos/`)
      .then(res => {
        const videos = res.data;
        this.setState({ videos:videos.reverse() });
      })
  }
  render() {
    return (
         <div className="videoContainer">
          {this.state.videos.filter(video => video.category === this.props.category).map( video => {
           return (
            <ul className='video' key={video.id}>
            <li>
              <div className='player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    url={video.videolink}
                    width='100%'
                    height='240px'
                    controls
                  />
                </div>
            </li>
            </ul>
           )
         })}
        </div>
     
      
    )
  }
};           
               