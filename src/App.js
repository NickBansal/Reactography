import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Router } from "@reach/router";
import BookList from './components/BookList'
import Graph from './components/Graph'
import Category from './components/Category'
import Home from './components/Home'


class App extends Component {

  state = {
    books: [],
    category: ''
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/">
            <BookList booklist={this.state.books} path="booklist"/>
            <Graph 
            category={this.state.category} 
            booklist={this.state.books} 
            path="graph">
              <Category path="/" onChange={this.changeCategory}/>
            </Graph>
          </Home>
        </Router>
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
