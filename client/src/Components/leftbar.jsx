import React from 'react';
import Axios from "axios";
import { NavLink } from 'react-router-dom';
let hrefLink = '#';

export default class Filter extends React.Component {
  state = {
    videos: []
  }
  componentDidMount() {
    Axios.get(`/videos/`)
      .then(res => {
        const videos = res.data;
        const cats = Array.from(new Set(videos.map( video => video.category)));
        this.setState({ videos:cats });
      })
  }

  categoryClick = (catName) => {
      console.log(catName)
      this.props.changeCategory(catName);
  }
  render() {
   return(
            <div className="col-lg-2 col-md-4 hidden-sm hidden-xs">
              <h2 className="icon"><i className="fa fa-gears" aria-hidden="true"></i>Categories</h2>
               <aside className="dark-bg">
                  <article>
                     <ul className="sidebar-links">
                        {this.state.videos.map( (cat, index) => {
                          return (
                            <li className="fa fa-chevron-right" key={index} onClick={ (e) => this.categoryClick(cat) }>
                              <NavLink to={hrefLink}>{cat}</NavLink>
                            </li>
                          )
                        })}
                     </ul>
                  </article>
               </aside>
            </div>
      
      )
   }
};
