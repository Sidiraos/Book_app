import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/Section';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Search  from './components/Search';
import Results from './components/Results';
import Footer from './components/Footer';
function App() {
  return (
    <Provider store={store}>
      <Nav />
        <Routes>
          <Route path='/Book_app' element={<Header />}>
            <Route index element={<Section />} />
          </Route>
          <Route path='/Book_app/search' element={<Search/>}>
            <Route index element={<Results />} />
          </Route>
          <Route path='/Book_app/shelves' element={<Section/>} />
        </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
