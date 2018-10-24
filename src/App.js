import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import BookList from './components/BookList'
import Graph from './components/Graph'
import Category from './components/Category'


class App extends Component {

  state = {
    books: [],
    category: ''
  }

  render() {
    return (
      <div className="App">
        <h1>HOME PAGE</h1>
        <Category onChange={this.changeCategory}/>
        <Graph 
        category={this.state.category} 
        booklist={this.state.books} />
        {/* <BookList booklist={this.state.books} /> */}
      </div>
    );
  }

  fetchBookData () {
    axios.get("https://www.googleapis.com/books/v1/users/107674767522245234451/bookshelves/1001/volumes")
    .then(books => {
      this.setState({
        books: books.data.items
      })
    })
  }

  componentDidMount() {
    this.fetchBookData()
  }

  changeCategory = (event) => {
    this.setState({
      category: event
    })
  } 

}

export default App;
