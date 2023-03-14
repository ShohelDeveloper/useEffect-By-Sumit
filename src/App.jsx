import { useState } from 'react'
import MyComponent from './component/MyComponent'


function App() {
const [show,setShow] = useState(true)
  return (
    <div> 
    <h1>React -useEffect() Hooks By Leanr With Sumit</h1>
      <p> react useEffect hook is working with side effect </p>
      
      {show && <MyComponent />}
      <p>
        <button type='button' onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? 'Hide Post':'Show Post'}
        </button>
      </p>
    </div>
    
  )
}

export default App
