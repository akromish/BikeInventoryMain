import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import CreateBike from "./create-bike";

const Bike = props => (
    <tr>
        <td>
            <Link style={{color: 'green'}} to={"/view/"+props.bike}>{props.bike.bike_name}</Link>
            {/*<Link style={{color: 'green'}} to={"/view/"+props.bike._id}>{props.bike.bike_name}</Link>*/}
        </td>
        <td className={props.bike.bike_completed ? 'completed' : ''}>
            {props.bike.bike_type}
        </td>
        <td className={props.bike.bike_completed ? 'completed' : ''}>
            {props.bike.bike_wheel_size}
        </td>
        <td>
            <Link to={"/edit/"+props.bike}>Edit</Link>
            {/*<Link to={"/edit/"+props.bike._id}>Edit</Link>*/}
        </td>
    </tr>
)


export default class BikesList extends Component {

    constructor(props) {
        super(props);
        this.state = {bikes: []}
    }

    componentDidMount() {
        const PORT = process.env.PORT || 4000;
        const url = 'http://localhost:' + PORT + "/bikes/";
        axios.get(url)
            .then(response => {
                this.setState({bikes: response.data});
            })
            .catch(function (error){
                console.log(error + " at bike-list " + PORT);
            })
    }

    bikeList() {
        return this.state.bikes.map(function(currentBike,i){
            return <Bike bike={currentBike} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Your Bikes:</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Wheel Size</th>
                            <th>Edit?</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.bikeList() }
                    </tbody>
                </table>
                <Link style={{border: "2px solid"}} to="/create">Add New Bike</Link>
                <Route path="/create" component={CreateBike} />
            </div>
        )
    }
}