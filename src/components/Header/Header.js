import { useContext } from 'react'
import { StoreContext } from '../../Store'

const Navigation = () => {
  const { darkTheme, setDarkTheme } = useContext(StoreContext)
  const buttonText = darkTheme ? 'Switch to light theme' : 'Switch to dark theme'

  const style = { display: 'flex', justifyContent: 'space-between' }
  const buttonLightStyle = { background: '#554e4e', color: '#f2f2f2' }

  const handleClick = (e) => {
    e.target.blur()
    setDarkTheme(!darkTheme)
  }

  return (
    <header>
      <nav style={style} className='list-books-nav'>
        <h1>MyReads</h1>
        <button style={!darkTheme ? buttonLightStyle : null} onClick={handleClick}>
          {buttonText}
        </button>
      </nav>
    </header>
  )
}

export default Navigation
