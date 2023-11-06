import React from 'react';
import { connect } from 'react-redux';
import { remove_book , remove_all } from '../redux/actions/bookAction/bookAction';
import FlipMove from 'react-flip-move';


const Section = ({book , removeBook , removeAll}) => {
  console.log("section : ", book)
  const handleRemove = (id)=>{
    removeBook(id)
  }

  const handleRemoveAll = ()=> {
    localStorage.setItem("booksData" , JSON.stringify([]));
    removeAll();
  }

  const removeAllBtn = book.length > 0 && <button className="btn btn-danger" onClick={()=>handleRemoveAll()}>Remove All</button>

  return (
    <div className='container mt-5 mb-5 shelves'>
      {
        book.length > 0 ? (      
        <>
        <h1>My BOOKS</h1>
        <FlipMove >
            {
              book.map((book)=>{
                return (
                  <div key={book.id} className='border shadow p-3 mb-3 row justify-content-between'>
                      <div className='col-12 col-sm-4'>
                        <p><strong>Title:</strong> {book.title}</p>
                      </div>
  
                      <div className='col-12 col-sm-4'>
                      <p><strong> Author:</strong> {book.author}</p> 
                      </div>
  
                      <div className='col-12 col-sm-4 d-sm-flex justify-content-sm-end'>
                        <button className="btn btn-warning delete-btn" onClick={()=>handleRemove(book.id)}>X</button>
                      </div>
                  </div>
                )
              })
            }
        </FlipMove>
  
  
        <div className='mt-3 mb-3 '>
          {
            removeAllBtn
          }
        </div>

        </>
        
        ) : ( <h3>No book Found please add some</h3>)

      }


    </div>
  )
}

const mapStateToPropsSection = (state)=>{
  return {
    book : state.book.books
  }
}
const mapDispatchToProps = (dispatch)=>{
  // eslint-disable-next-line no-unused-expressions
  return {
    removeBook : (id) => dispatch(remove_book(id)) ,
    removeAll : ()=> dispatch(remove_all())
  }
}



export default connect(mapStateToPropsSection , mapDispatchToProps)(Section)