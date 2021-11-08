import {
  Carousel,
  Wrap
} from './ImgSlider.styled'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Carousel {...settings}>
      <Wrap>
        <Link to='/'>
          <img src="/images/slider-badging.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to='/'>
          <img src="/images/slider-scale.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to='/'>
          <img src="/images/slider-badag.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to='/'>
          <img src="/images/slider-scales.jpg" alt="" />
        </Link>
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider
