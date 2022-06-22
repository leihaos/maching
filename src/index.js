import ReactDOM from 'react-dom'
import { Footer } from '@pmndrs/branding'
import './styles.css'
import App from './App'

ReactDOM.render(
  <>
    <App />
    <Footer date="22. June" year="2021" />
  </>,
  document.querySelector('#root')
)
