import { useState } from "react"
import "../styles/shelf.css"

const getTextColor = (bgColor) => {
    const temp = document.createElement("div")
    temp.style.color = bgColor
    document.body.appendChild(temp)

    const computedColor = getComputedStyle(temp).color
    document.body.removeChild(temp)

    const [r, g, b] = computedColor.match(/\d+/g).map(Number)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000

    return brightness > 150 ? "#0e0e0e" : "#f1f1f1"
}

function Shelf({ title, books = [], onSelectBook }) {
    const visibleCount = 5
    const [index, setIndex] = useState(0)
    const [offset, setOffset] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const itemWidth = 136

    if (!books.length) return null

    const next = () => {
        if (isAnimating) return

        setIsAnimating(true)
        setOffset(-itemWidth)

        setTimeout(() => {
            setIndex((prev) => (prev + 1) % books.length)
            setOffset(0)
            setIsAnimating(false)
        }, 300)
    }

    const prev = () => {
        if (isAnimating) return

        setIsAnimating(true)
        setOffset(itemWidth)

        setTimeout(() => {
            setIndex((prev) =>
                prev === 0 ? books.length - 1 : prev - 1
            )
            setOffset(0)
            setIsAnimating(false)
        }, 300)
    }

    const count = Math.min(visibleCount, books.length)

    const visibleBooks = Array.from({ length: count }, (_, i) => {
        return books[(index + i) % books.length]
    })

    return (
        <section className="section-shelf">
            <h2>{title}</h2>

            <div className="carousel-container">

                {books.length > 5 ? <button className="nav-btn left" onClick={prev}>{"<"}</button> : ""}

                <div className="shelf-wrapper">
                    <div
                        className="shelf-carousel"
                        style={{
                            transform: `translateX(${offset}px)`,
                            transition: isAnimating ? "transform 0.3s ease" : "none"
                        }}
                    >
                        {visibleBooks.map((book, i) => {
                            const textColor = getTextColor(book.color)

                            return (
                                <div
                                    key={`${book.id}-${i}`}
                                    className="book-item"
                                    style={{ backgroundColor: book.color }}
                                    onClick={() => onSelectBook && onSelectBook(book)}
                                >
                                    <div
                                        className="book-overlay"
                                        style={{ color: textColor }}
                                    >
                                        <span className="book-title">{book.title}</span>
                                        <span className="book-author">{book.author}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {books.length > 5 ? <button className="nav-btn right" onClick={next}> {">"} </button> : ""}


            </div>
        </section>
    )
}

export default Shelf