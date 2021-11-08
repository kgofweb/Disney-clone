import {
  Nav,
  Logo,
  Login,
  NavMenu,
  UserImg,
  SignOut,
  DropDown
} from './Header.styled'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { auth, provider } from '../firebase/firebaseConfig'
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState
} from '../../features/user/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    // Verifier le status utilisateur (connecter/déconnecter)
    auth.onAuthStateChanged(async user => {
      if(user) {
        setUser(user)
        history.push('/home')
      }
    })
  }, [userName])

  // Connecter un utilisateur via Gmail
  const handleAuthentication = () => {
    // Si l'utlilisateur n'est pas connecté
    if(!userName) {
      auth
      .signInWithPopup(provider)
        .then(result => {
          // console.log(result)
          setUser(result.user)
        })
        .catch(error => { alert(error.message) })
      // Si l'utilisateur est connecté if (userName)
    } else {
      auth
      .signOut()
        .then(() => {
          // Vider le state dans userSlice
          dispatch(setSignOutState())
          history.push('/')
        })
        .catch(error => { alert(error.message) })
    }
  }

  // Récupérer les infos utilisateur (le conncter)
  const setUser = user => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }

  return (
    <Nav>
      <Logo>
        <Link to='/'>
          <img src="/images/logo.svg" alt="Disney+" />
        </Link>
      </Logo>

      {!userName ? (
        <Login onClick={handleAuthentication}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </Link>
            <Link to=''>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </Link>
            <Link to=''>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </Link>
            <Link to=''>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </Link>
            <Link to=''>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </Link>
            <Link to=''>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuthentication}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  )
}

export default Header