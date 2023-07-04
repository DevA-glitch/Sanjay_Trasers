import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Product/ProductPage.css';

import Kb1 from '../../Img/kitchen/Kb-1.jpg';
import Kb2 from '../../Img/kitchen/Kb-2.jpg';
import Kb3 from '../../Img/kitchen/Kb-3.jpg';
import Kb4 from '../../Img/kitchen/Kb-4.jpg';
import Kb5 from '../../Img/kitchen/Kb-5.jpg';
import Kb6 from '../../Img/kitchen/Kb-6.jpg';
import Kb7 from '../../Img/kitchen/Kb-7.jpg';
import Kb8 from '../../Img/kitchen/Kb-8.jpg';
import Kb9 from '../../Img/kitchen/Kb-9.jpg';
import Kb10 from '../../Img/kitchen/Kb-10.jpg';
import Kb11 from '../../Img/kitchen/Kb-11.jpg';
import Kb12 from '../../Img/kitchen/Kb-12.jpg';
import Kb13 from '../../Img/kitchen/Kb-13.jpg';
import Pp1 from '../../Img/pooja/Pp-1.jpg';
import Pp2 from '../../Img/pooja/Pp-2.jpg';
import Pp3 from '../../Img/pooja/Pp-3.jpg';
import Pp4 from '../../Img/pooja/Pp-4.jpg';
import Pp5 from '../../Img/pooja/Pp-5.jpg';
import Pp6 from '../../Img/pooja/Pp-6.jpg';
import Pp8 from '../../Img/pooja/Pp-8.jpg';
import Pp9 from '../../Img/pooja/Pp-9.jpg';
import Pp10 from '../../Img/pooja/Pp-10.jpg';
import Pp11 from '../../Img/pooja/Pp-11.jpg';
import Pp12 from '../../Img/pooja/Pp-12.jpg';
import Pp13 from '../../Img/pooja/Pp-13.jpg';
import Dp1 from '../../Img/doors/Dp-1.jpg';
import Dp2 from '../../Img/doors/Dp-2.jpg';
import Dp3 from '../../Img/doors/Dp-3.png';
import Dp4 from '../../Img/doors/Dp-4.jpg';
import Dp5 from '../../Img/doors/Dp-5.png';
import Dp6 from '../../Img/doors/Dp-6.jpg';
import Dp7 from '../../Img/doors/Dp-7.jpg';
import Bp1 from '../../Img/beds/Bp-1.jpg';
import Bp2 from '../../Img/beds/Bp-2.jpg';
import Bp3 from '../../Img/beds/Bp-3.jpg';
import Bp4 from '../../Img/beds/Bp-4.jpg';
import Bp5 from '../../Img/beds/Bp-5.jpg';
import Bp6 from '../../Img/beds/Bp-6.jpg';
import Bp7 from '../../Img/beds/Bp-7.jpg';
import Bp8 from '../../Img/beds/Bp-8.png';


const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [images, setImages] = useState([
    { id: 1, src: Kb1, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 2, src: Kb2, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 3, src: Kb3, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 4, src: Kb4, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 5, src: Kb5, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 6, src: Kb6, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 7, src: Kb7, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 8, src: Kb8, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 9, src: Kb9, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 10, src: Kb10, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 11, src: Kb11, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 12, src: Kb12, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 13, src: Kb13, title: 'Kitchen Modular', category: 'Kitchen' },
    { id: 14, src: Pp1, title: 'Pooja Self', category: 'Poja' },
    { id: 15, src: Pp2, title: 'Pooja Self', category: 'Poja' },
    { id: 16, src: Pp3, title: 'Pooja Self', category: 'Poja' },
    { id: 17, src: Pp4, title: 'Pooja Self', category: 'Poja' },
    { id: 18, src: Pp5, title: 'Pooja Self', category: 'Poja' },
    { id: 19, src: Pp6, title: 'Pooja Self', category: 'Poja' },
    { id: 20, src: Pp8, title: 'Pooja Self', category: 'Poja' },
    { id: 21, src: Pp9, title: 'Pooja Self', category: 'Poja' },
    { id: 22, src: Pp10, title: 'Pooja Self', category: 'Poja' },
    { id: 23, src: Pp11, title: 'Pooja Self', category: 'Poja' },
    { id: 24, src: Pp12, title: 'Pooja Self', category: 'Poja' },
    { id: 25, src: Pp13, title: 'Pooja Self', category: 'Poja' },
    { id: 26, src: Dp1, title: 'Doors', category: 'Doors' },
    { id: 27, src: Dp2, title: 'Doors', category: 'Doors' },
    { id: 28, src: Dp3, title: 'Doors', category: 'Doors' },
    { id: 29, src: Dp4, title: 'Doors', category: 'Doors' },
    { id: 30, src: Dp5, title: 'Doors', category: 'Doors' },
    { id: 31, src: Dp6, title: 'Doors', category: 'Doors' },
    { id: 32, src: Dp7, title: 'Doors', category: 'Doors' },
    { id: 33, src: Bp1, title: 'Bed', category: 'Beds' },
    { id: 34, src: Bp2, title: 'Bed', category: 'Beds' },
    { id: 35, src: Bp3, title: 'Bed', category: 'Beds' },
    { id: 36, src: Bp4, title: 'Bed', category: 'Beds' },
    { id: 37, src: Bp5, title: 'Bed', category: 'Beds' },
    { id: 38, src: Bp6, title: 'Bed', category: 'Beds' },
    { id: 39, src: Bp7, title: 'Bed', category: 'Beds' },
    { id: 40, src: Bp8, title: 'Bed', category: 'Beds' },
  ]);

  const categories = ['all', 'Kitchen', 'Poja', 'Doors', 'Beds', 'category5'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages = selectedCategory === 'all' ? images : images.filter((image) => image.category === selectedCategory);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const fullScreenRef = useRef(null);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Enter full-screen mode
      if (fullScreenRef.current.requestFullscreen) {
        fullScreenRef.current.requestFullscreen();
      } else if (fullScreenRef.current.mozRequestFullScreen) {
        fullScreenRef.current.mozRequestFullScreen();
      } else if (fullScreenRef.current.webkitRequestFullscreen) {
        fullScreenRef.current.webkitRequestFullscreen();
      } else if (fullScreenRef.current.msRequestFullscreen) {
        fullScreenRef.current.msRequestFullscreen();
      }
    } else {
      // Exit full-screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);
    };
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="text-center">
        <p className="mb-3 mt-4 text-sm font-medium">Browse our items</p>
        <h1 className="mb-4 text-4xl font-semibold">Our Products</h1>
        <div className="flex justify-center my-1">
          <div className="w-[14rem] h-[1.5px] bg-slate-400"></div>
        </div>
      </div>
      <div className="p-4 mx-[1rem]">
        <div className="bg-slate-200 flex items-center justify-between">
          <p className="text-xl text-black px-1">
            <Link to="/">Home</Link> / <span className=" text-slate-300 cursor-not-allowed">Product</span>
          </p>
          <button className="bg-black px-3 py-1 text-white">
            <Link to="/contact">Want To Buy..?</Link>
          </button>
        </div>
        <div className="flex items-start justify-between mt-3 p-container bg-slate-50">
          <div className="flex items-center gap-3 flex-wrap bg-white">
            {filteredImages.map((image) => (
              <div className="flex flex-col hover:bg-gray-900 hover:text-white p-img">
                <img
                  className="cursor-pointer border-2 p-image hover:scale-[90%] md:transform-none duration-500"
                  key={image.id}
                  src={image.src}
                  alt={`Image ${image.id}`}
                  ref={fullScreenRef}
                  onClick={() => setSelectedImage(image)}
                />
                <h2 className="text-xl px-1 py-3">{image.title}</h2>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start px-10 mt-[3rem] text-right sticky top-32 z-50 p-cat">
            <h1 className="text-xl font-bold p-text">Categories:</h1>
            {categories.map((category) => (
              <div className=" link">
                <Link to="/producrpage" key={category}>
                  <button
                    className="text-xl tracking-wider text-slate-500 font-semibold hover:text-red-700 duration-200"
                    onClick={() => handleCategoryChange(category)}
                    style={{ margin: '5px' }}
                  >
                    {category}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="selected-image-container">
          <img
            className="selected-image"
            src={selectedImage.src}
            alt={`Selected Image ${selectedImage.id}`}
          />
          <button className="close-button" onClick={() => setSelectedImage(null)}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default ProductPage;
