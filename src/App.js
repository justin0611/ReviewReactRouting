import React from 'react';
import Home from './Page/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeHeader from './Component/HomeHeader';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Profile from './Page/Profile/Profile';
export default function App() {
  return (
    <BrowserRouter>
      <HomeHeader />
      <Route exact path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  )
}
