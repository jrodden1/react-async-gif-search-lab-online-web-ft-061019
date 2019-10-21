import React from 'react'
import GifListContainer from '../containers/GifListContainer.js';
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 
// http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
// forEach snag this url and post it - data.images.original.url


const App = () => {
  return (
    <div className="container">
        <NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
