
import { Carousel } from "react-bootstrap"

const CarouselDetail = ({ images }) => {
  if(!images) return null
    return (
      // <Container style={{ height:"250%"}}>
      <Carousel>
        {images.map((e, idx) => (
          <Carousel.Item key={idx}>
            <img style={{ width: "100%", maxHeight:"500px" }} src={e} alt={e} />
          </Carousel.Item>
        ))}
      </Carousel>
      // </Container>
    );
  };

export default CarouselDetail;