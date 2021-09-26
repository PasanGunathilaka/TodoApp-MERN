 
//import './App.css';
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/home';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from './actions';

function App() {
  const dispatch = useDispatch();
 // const auth = useSelector(state => state.auth);
  useEffect(() => {

    dispatch(getTasks());
  
  }, []);
   
  return (
    <div className="App">
  
     <Route path="/" component={Home}/> 
 
    </div>
  );
}

export default App;
