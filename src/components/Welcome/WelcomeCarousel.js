import { Carousel } from 'react-bootstrap'

function WelcomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Save</h5>
          <p>Upload your parking image, parking go will save it in the browser.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1000633/pexels-photo-1000633.jpeg?auto=compress"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h5>Compress image</h5>
          <p>parking go will compress big size image.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default WelcomeCarousel