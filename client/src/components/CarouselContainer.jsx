import { Carousel, Container } from "react-bootstrap"

const CarouselContainer = () => {
    return (
      <Carousel> 
        <Carousel.Item style={{ height:"90vh"}}>
          <img
            className="d-block w-100"
            src="./carousel-car1.jpg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item style={{ height:"90vh"}}>
          <img
            className="d-block w-100"
            src="./carousel-car2.jpg"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item style={{ height:"90vh"}}>
          <img
            className="d-block w-100"
            src="./carousel-car3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}

export default CarouselContainer;