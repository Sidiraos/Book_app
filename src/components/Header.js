import React , {useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { add_book } from '../redux/actions/bookAction/bookAction';
import { Outlet } from 'react-router-dom';
import firstLetterUppercase from '../globalFunction/firstLetterUppercase';
import {toast , ToastContainer} from 'react-toastify';

const Header = (props) => {
  // console.log(props.book)
  const [title , setTitle] = useState("");
  const [author , setAuthor] = useState("");

  const addBook = (e)=> {
    e.preventDefault();
    const book = {
      id : uuidv4(),
      title : firstLetterUppercase(title),
      author : firstLetterUppercase(author)
    }
    localStorage.setItem("booksData" , JSON.stringify([...props.book , book]))
    props.dispatchBook(book);
    toast.info(`📕 ${book.title} added!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    setTitle("")
    setAuthor("")
  }


	return (
		<header className='mt-5 container'>
			<h1 className='h1'>Add Book</h1>
			<p>Add a book in your bookshelves</p>
			<form onSubmit={addBook}>
        <div className='row mb-3 g-2'>
          <div className='col-sm-6 col-12'>
              <input required onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Title" className='form-control' />
          </div>
          <div  className='col-sm-6 col-12'>
				     <input required onChange={(e)=>setAuthor(e.target.value)} value={author} type="text" placeholder="Author" className='form-control '/>
          </div>
        </div>

        <div className = 'text-center-sm'>
				    <button className='btn btn-primary' type='submit'>Add Book</button>
        </div>
				
			</form>
      <Outlet />
      <ToastContainer />
		</header>
	);
};

const mapStateToProps = (state)=>{
  // console.log(state)
  return {
    book : state.book.books
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    dispatchBook : (book) => dispatch(add_book(book))
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Header);
