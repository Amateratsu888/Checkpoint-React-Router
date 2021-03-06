import React from 'react'
import MovieCard from './MovieCard'
import  Description  from './Description'
import Error from './Error'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import '../styles/MovieList.css'

export default function MovieList() {
   

    return (
        <>
        <Router>
           
           <Switch>
            <Route exact path='/' component={MovieCard}/>
            <Route  path='/:title' component={Description}/>
           <Route path="/" component={Error} />
            </Switch>   
            </Router>
            
        </>
    )
}
