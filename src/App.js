import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

//import "./book.css"
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  componentDidMount = () => {
    axios
    .get(`http://localhost:3033/books`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        books : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
    
  }
  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
      <h1>BestBooks</h1>
      <Carousel  >
        {this.state.books.length ? (
           this.state.books.map((item) => {
                return(
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0ZKixQP075-zUk4h5d_bQ3tx1ibJdqRaEBlQ4_8MnA&s"
                    alt={item.title}
                  />
                  <Carousel.Caption>
                    <h3><p>{item.title}</p></h3>
                    <p>{item.description}</p>
                    <p>{item.status}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                )
              })
           
          
        ) : (
          <h3>No Books Found :(</h3>
        )}
         </Carousel>
      </>
    );
      }
  }

export default BestBooks;