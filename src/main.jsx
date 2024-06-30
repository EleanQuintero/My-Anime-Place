import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoginProvider } from './contexts/login.jsx'
import { AnimeProvider } from './contexts/animes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimeProvider>
    <LoginProvider>
      <App />
    </LoginProvider>
  </AnimeProvider>
 

)
 
 
