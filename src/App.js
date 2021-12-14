import React from 'react'
import Home from './views/home'
import {Route, Switch} from 'react-router-dom'
import SearchPage from './views/searchPage';
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/search/:keyWord" component={SearchPage}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  )
}