import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNewDisney } from '../../features/movies/movieSlice'
import { Container, Content, Wrap } from '../global/Global.styled'

const NewDisney = () => {
  const movies = useSelector(selectNewDisney)
  console.log(movies)

  return (
    <Container>
      <h4>New Disney+</h4>
      <Content>
        {movies && movies.map((movie, key) => (
          <Wrap key={key}>
            {movie.id}
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.cardImg} alt={movie.title}/>
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  )
}

export default NewDisney
