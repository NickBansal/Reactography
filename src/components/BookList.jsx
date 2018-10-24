import React from 'react';
import '../App.css';

const BookList = ({ booklist }) => {
    console.log(booklist)
    return (
    <div>
        {booklist.map(book => {
            return <div className="BookLayout" key={book.id}>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title}/>
                <div className="BookInformation">
                    <h1>{book.volumeInfo.title}</h1>
                    <h4>{book.volumeInfo.authors}</h4>
                </div>
            </div>
        })}
    </div>
    )
}

export default BookList;