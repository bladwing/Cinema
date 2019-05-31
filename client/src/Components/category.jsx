import React from 'react'
import ReactDOM from 'react-dom'
import Axios from "axios";



export default class Filter extends React.Component {
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
  	return(
  			<div>

  			</div>
  		
  		)
	}
}
