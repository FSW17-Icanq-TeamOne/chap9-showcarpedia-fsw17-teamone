import { useState } from "react"
import { useEffect } from "react"
import { Carousel } from "react-bootstrap"

const CarouselDetail = ({images}) => {
  const image = [images]
    return (
        // <Container style={{ height:"250%"}}>
          <Carousel>
          {image.map((e,idx) => (
            <Carousel.Item key={idx} >
            <img
            style={{width:"100%"}}
             src={e}
             alt={e}
            />
          </Carousel.Item>
          ))}
             
     
              
            
            
          </Carousel>
        // </Container> 
    )
}

export default CarouselDetail;