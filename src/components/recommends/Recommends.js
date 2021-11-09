import { Container, Content, Wrap } from './Recommends.styled'
import { Link } from 'react-router-dom'

const Recommends = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <Link>
            <img src="/images/slider-badag.jpg" alt="disneyPlus clone" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  )
}

export default Recommends
