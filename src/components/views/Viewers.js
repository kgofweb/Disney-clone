import { 
  Container,
  Wrap
} from "./Viewers.styled"

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disneyPlus-clone" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="disneyPlus-clone" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="disneyPlus-clone" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="disneyPlus-clone" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="disneyPlus-clone" />
      </Wrap>
    </Container>
  )
}

export default Viewers
