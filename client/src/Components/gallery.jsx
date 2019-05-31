import React from 'react';
import ImageGallery from 'react-image-gallery';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../../node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss';
import '../../node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css';

export default class Slider extends React.Component {
 
  render() {
 
    const images = [
      {
        original: 'https://www.overkillsoftware.com/ovk-media/2018/04/Steam_Spring_VR_Sale.png',
        thumbnail: 'https://www.overkillsoftware.com/ovk-media/2018/04/Steam_Spring_VR_Sale.png',
      },
      {
        original: 'http://heroimages.s3.amazonaws.com/Borderlands-Pre-Sequel-Herofix.jpg',
        thumbnail: 'http://heroimages.s3.amazonaws.com/Borderlands-Pre-Sequel-Herofix.jpg'
      },
      {
        original: 'https://cdn.shopify.com/s/files/1/0448/5189/t/2/assets/slideshow_5.jpg?0',
        thumbnail: 'https://cdn.shopify.com/s/files/1/0448/5189/t/2/assets/slideshow_5.jpg?0'
      },
       {
        original: 'https://thebrokencliche.files.wordpress.com/2015/10/4dd372af242744bddf538051419f3de6.jpg?w=1280&h=400&crop=1',
        thumbnail: 'https://thebrokencliche.files.wordpress.com/2015/10/4dd372af242744bddf538051419f3de6.jpg?w=1280&h=400&crop=1'
      },
       {
        original: 'https://heroimages.s3.amazonaws.com/GodofWar18-RHero.jpg',
        thumbnail: 'https://heroimages.s3.amazonaws.com/GodofWar18-RHero.jpg'
      }

     
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
};
