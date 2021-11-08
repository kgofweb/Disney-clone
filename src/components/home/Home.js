import { 
  Container,
} from "./Home.styled"
import ImgSlider from "../ImgSlide/ImgSlider"
import Viewers from "../views/Viewers"

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  )
}

export default Home
