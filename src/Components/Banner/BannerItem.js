import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../Banner/BannerItem.css"
import image from "../../Img/pngtree-nordic-minimalist-furniture-banner-design-picture-image_1039338.jpg"
import image_1 from "../../Img/banner-2.jpg"
import image_2 from "../../Img/banner-3.jpg"


const BannerItem = () => {
  return (
    <Carousel interval={1500} className=' mx-3 my-1 p-3 shadow-md border'>

      <Carousel.Item>
        <img
          className="d-block w-100 h-[80vh] imageBanner"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption className='text-black'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-[80vh] imageBanner"
          src={image_1}
          alt="Second slide"
        />

        <Carousel.Caption className='text-black'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-[80vh] imageBanner"
          src={image_2}
          alt="Third slide"
        />

        <Carousel.Caption className='text-black'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default BannerItem