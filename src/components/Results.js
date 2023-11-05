import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { add_book } from '../redux/actions/bookAction/bookAction';
import firstLetterUppercase from '../globalFunction/firstLetterUppercase';
import { toast , ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";


const Results = ({googleBookAPI , dispatchBook , bookState}) => {
    // console.log(googleBookAPI)
    // console.log(googleBookAPI.data)
    useEffect(()=>{
        localStorage.setItem("booksData" , JSON.stringify([...bookState]))
    } , [bookState])
    const addBook = (bookData)=>{
        const book = {
            id : bookData.id,
            title : firstLetterUppercase(bookData.volumeInfo.title),
            author : firstLetterUppercase(bookData.volumeInfo.authors && bookData.volumeInfo.authors.join(', '))
        }
        if(bookState.find(bookState => bookState.id === book.id)){
            toast.error(`📕 ${bookData.volumeInfo.title} already exists!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else{
            dispatchBook(book)
            toast.info(`📕 ${bookData.volumeInfo.title} added!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }



    const showLoadingOrData = googleBookAPI.loading  ?
    (
        <div className="spinner-border text-primary mt-5" role="status">
            <span>Loading...</span>
        </div>
    ) : 
    
    (
        googleBookAPI.error ? 

        (
            <div class="alert alert-danger" role="alert">
                {
                    googleBookAPI.error
                }   
            </div>
        ) : 
        
        (
            <div className="accordion accordion-flush" id="accordionFlushExample">
            {
                googleBookAPI.data.map(book=>(
                    <div className="accordion-item" key={uuidv4()}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target= {`#flush-collapse${book.id}`} aria-expanded="false" aria-controls={`flush-collapse${book.id}`}>
                                    {book.volumeInfo.title}
                                </button>
                            </h2>

                            <div id={`flush-collapse${book.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" onClick={(e)=>{e.stopPropagation()}}>
                                    <div className="accordion-body d-flex flex-column gap-3">
                                        
                                        {
                                            book.volumeInfo.imageLinks && <div className='book-image'><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className='w-100' /></div> 
                                        }
                                        <h3>Title : {book.volumeInfo.title}</h3>
                                        <h4>Authors : {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</h4>
                                        <p className='description'>
                                            {book.volumeInfo.description}
                                        </p>
                                        <div className='btn-group'>
                                            <button type='button' className='btn btn-success'><a href={book.volumeInfo.previewLink ? book.volumeInfo.previewLink : book.volumeInfo.infoLink} target='_blank' rel="noreferrer noopener" className="text-decoration-none text-white">More infos</a></button>
                                            <button type='button' onClick={(e)=>{e.stopPropagation();addBook(book)}} className='btn btn-primary ms-3'>Add to shelf</button>
                                        </div>
                                    </div>
                            </div>
                    </div>
                ))
            }
        </div>
        )
    )
        
    
  return (
    <section className='container mt-3 mb-3 text-center'>
        {
            showLoadingOrData
        }
        <ToastContainer />
    </section>
 
  )
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
      bookState : state.book.books,
      googleBookAPI : state.googleBookApi
    }
    
  }

  const mapDispatchToProps = (dispatch)=>{
    return {
      // eslint-disable-next-line no-unused-expressions
      dispatchBook : (book) => dispatch(add_book(book))
    }
  }


export default connect(mapStateToProps , mapDispatchToProps)(Results)