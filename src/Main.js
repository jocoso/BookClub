import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";
import Contact from "./Contact";
import "./index.css";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple Book Sheet</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/booklist">Book List</NavLink></li>
                        <li><NavLink to="/contactme">Contact Me</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/booklist" component={BookList}/>
                        <Route path="/contactme" component={Contact} />
                    </div>
                </div>
            </HashRouter>
            
        )
    }
}

export default Main;