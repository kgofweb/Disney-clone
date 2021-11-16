import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOriginal } from '../../features/movies/movieSlice'
import { Container, Content, Wrap } from '../global/Global.styled'

const Original = () => {
  const movies = useSelector(selectOriginal)
  
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {movies && movies.map((movie, key) => (
          <Wrap key={key}>
            {movie.id}
            <Link to={`/detatil/${movie.id}`}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  )
}

export default Original
