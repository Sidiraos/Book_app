import React , {useState} from 'react';
import {connect} from 'react-redux';
import { load_book_api } from '../redux/actions/googleBookApiAction/googleBookAPICallAction';
import { Outlet } from 'react-router-dom';


const Search = ({callGoogleBookApi}) => {
    const [searchValue, setSearch] = useState('')
    const handleSumbitSearch = (e)=>{
        e.preventDefault();
        callGoogleBookApi(searchValue);
        setSearch("")
    }
  return (
    <>
        <section className='bg-light search p-sm-5 p-2'>
            <h1>Book Search</h1>
            <p>Search for a book with Google Books API</p>
            <form className='input-group' onSubmit={handleSumbitSearch}>
                <input required onChange={(e)=>setSearch(e.target.value)} value={searchValue} type="text" placeholder='Search...' className='form-control' />
                <button type='submit' className='btn btn-primary'>Search</button>
            </form>
        </section>

        <Outlet />

     
    </>

  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    googleBookAPI : state.googleBookApi
  }
  
}

const mapDispatchToProps = dispatch => {
  // console.log(dispatch)
  return {
    callGoogleBookApi : searchValue => dispatch(load_book_api(searchValue))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)