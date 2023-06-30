import {useState} from 'react'
import FortuneCookie from './assets/components/FortuneCookie'
import './App.css'
import cookie from './assets/data/phrases.json'

function App() {
  const back = ['/src/assets/components/fondosImg/fondo1.png','/src/assets/components/fondosImg/fondo2.png', '/src/assets/components/fondosImg/fondo3.png','/src/assets/components/fondosImg/fondo4.png']
  const [index, useIndex] = useState (0)
  const [bg, usebg]= useState (0)

  const lucky = () => {
    if (bg < back.length -1) {
      usebg(bg + 1)
    }else{
      usebg(0)
    }
    
    useIndex(Math.floor(Math.random()*cookie.length))
  }
  document.body.style= `background-image: url(${back[bg]})`
  return (
    <>
     <FortuneCookie 
     data={cookie[index]}/>
     <div>
      <button onClick= {lucky}>Try again!</button>
     </div>
     
    </>
  )
}

export default App
