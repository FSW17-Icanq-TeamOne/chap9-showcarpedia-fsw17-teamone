import { Carousel, Container } from "react-bootstrap"

const CarouselDetail = () => {
    return (
        // <Container style={{ height:"250%"}}>
          <Carousel> 
            <Carousel.Item>
              <img
                className="d-flex w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Toyota_Alphard_350_V6_%28III%29_%E2%80%93_Frontansicht%2C_2._April_2018%2C_Hongkong.jpg/1920px-Toyota_Alphard_350_V6_%28III%29_%E2%80%93_Frontansicht%2C_2._April_2018%2C_Hongkong.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Toyota_Alphard_350_V6_%28III%29_%E2%80%93_Frontansicht%2C_2._April_2018%2C_Hongkong.jpg/1920px-Toyota_Alphard_350_V6_%28III%29_%E2%80%93_Frontansicht%2C_2._April_2018%2C_Hongkong.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Toyota_Alphard_350_V6_%28III%29_%E2%80%93_Frontansicht%2C_2._April_2018%2C_Hongkong.jpg/1920px-Toyota_Alphard_350_V6_%28III%29_%E2%80%93_Frontansicht%2C_2._April_2018%2C_Hongkong.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        // </Container> 
    )
}

export default CarouselDetail;