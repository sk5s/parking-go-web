import { Carousel } from 'react-bootstrap'

function WelcomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item style={{minHeight: "300px"}}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress"
          alt="First slide"
        />
        <Carousel.Caption className='bg-dark rounded'>
          <h5>Save</h5>
          <p>Upload your parking image, parking go will save it in the browser's localstorage.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{minHeight: "300px"}}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2402235/pexels-photo-2402235.jpeg?auto=compress"
          alt="Second slide"
        />

        <Carousel.Caption className='bg-dark rounded'>
          <h5>Compress image</h5>
          <p>parking go will compress big size image.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default WelcomeCarousel