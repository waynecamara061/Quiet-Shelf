import '../styles/app.css'
import Shelf from '../components/Shelf'
import {  myBooks, publicBooks } from "../data/books"

function App() {
  return (
    <>
        <div className="shelf-page-container">
          <Shelf title="minha estante" books={myBooks}></Shelf>
        </div>
    </>
  )
}

export default App
