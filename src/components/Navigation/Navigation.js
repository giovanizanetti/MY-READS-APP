import { dark } from '@material-ui/core/styles/createPalette'
import { useContext } from 'react'
import { StoreContext } from '../../Store'

const Navigation = () => {
  const { darkTheme, setDarkTheme } = useContext(StoreContext)
  const buttonText = darkTheme ? 'Switch to light theme' : 'Switch to dark theme'

  const style = { display: 'flex', justifyContent: 'space-between', padding: '10px 30px' }
  const buttonLightStyle = { background: '#313131', color: '#f2f2f2' }

  return (
    <nav style={style} className='list-books-title'>
      <h1>MyReads</h1>
      <button style={!darkTheme ? buttonLightStyle : null} onClick={() => setDarkTheme(!darkTheme)}>
        {buttonText}
      </button>
    </nav>
  )
}

export default Navigation
