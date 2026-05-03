import '../styles/app.css'
import Shelf from '../components/Shelf'
import {  myBooks, publicBooks } from "../data/books"

function PublicShelfPage() {
    return (
        <>
            <div className="shelf-page-container">
                <Shelf title="estante compartilhada" books={publicBooks}></Shelf>
            </div>
        </>
    )
}
export default PublicShelfPage