import { Container } from "./Home.styled"
import ImgSlider from "../ImgSlide/ImgSlider"
import Viewers from "../views/Viewers"
import Recommends from "../recommends/Recommends"
import NewDisney from "../newDisney/NewDisney"
import Original from "../original/Original"
import Trending from '../trending/Trending'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setMovies } from "../../features/movies/movieSlice"
import { selectUserName } from "../../features/user/userSlice"

import db from "../firebase/firebaseConfig"

const Home = () => {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  let recommends = []
  let newDisneys = []
  let originals = []
  let trending = []

  // Au moment du montage des composants
  useEffect(() => {
    // console.log('Hello');
    db
    .collection('movies')
    .onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        // console.log(originals);
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, {id: doc.id, ...doc.data()}]
            break;
        
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }]
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }]
            break;
        }
      })

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending
        })
      )
    })
    // A chaque foi que le userName se met à jour !
  }, [userName])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Original />
      <Trending />
    </Container>
  )
}

export default Home
