import { useContext } from 'react'
import { StoreContext } from '../../Store'
import { Link } from 'react-router-dom'

const Navigation = () => {
  // const { darkTheme, setDarkTheme } = useContext(StoreContext)
  // const buttonText = darkTheme ? 'Switch to light theme' : 'Switch to dark theme'

  // const style = { display: 'flex', justifyContent: 'space-between', padding: '10px 30px' }
  // const buttonLightStyle = { background: '#554e4e', color: '#f2f2f2' }

  // const handleClick = (e) => {
  //   e.target.blur()
  //   setDarkTheme(!darkTheme)
  // }

  return (
    <div className='toolbar'>
      <Link to='/search'>
        <button id='search'>Add a book</button>
      </Link>
      <Link to='/search'>
        <button id='delete'>Add a book</button>
      </Link>
    </div>
  )
}

export default Navigation
