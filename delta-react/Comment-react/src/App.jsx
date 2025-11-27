import { useState } from 'react'
import './App.css'
import Commentsform from './CommentsForms'
import Comment from './Comment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <Comment/>
    </div>
  )
}

export default App
