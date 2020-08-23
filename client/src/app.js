import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EditBike from "./components/edit-bike";
import CreateBike from "./components/create-bike";
import BikesList from "./components/bikes-list";
import ViewBike from "./components/view-bike";
import './app.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="app-title" to="/">Bike Inventory App</Link>
                        <div className="collapse navbar-collapse">
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={BikesList} />
                    <Route path="/edit/:id" component={EditBike} />
                    <Route path="/view/:id" component={ViewBike} />
                    <Route path="/create" component={CreateBike} />
                </div>
            </Router>
        );
    }
}

export default App;