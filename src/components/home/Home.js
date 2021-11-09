import { 
  Container,
} from "./Home.styled"
import ImgSlider from "../ImgSlide/ImgSlider"
import Viewers from "../views/Viewers"
import Recommends from "../recommends/Recommends"

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
    </Container>
  )
}

export default Home
