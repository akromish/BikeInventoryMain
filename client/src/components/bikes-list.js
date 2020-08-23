import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import CreateBike from "./create-bike";
const client = require('../client');

const Bike = props => (
    <tr>
        <td>
            <Link style={{color: 'green'}} to={"/view/"+props.bike}>{props.bike.bike_name}</Link>
        </td>
        <td className={props.bike.bike_completed ? 'completed' : ''}>
            {props.bike.bike_type}
        </td>
        <td className={props.bike.bike_completed ? 'completed' : ''}>
            {props.bike.bike_wheel_size}
        </td>
        <td>
            <Link to={"/edit/"+props.bike}>Edit</Link>
        </td>
    </tr>
)


export default class BikesList extends Component {

    constructor(props) {
        super(props);
        this.state = {bikes: []}
    }

    componentDidMount() {

        client.get('/bikes/')
            .then(response => {
                this.setState({bikes: response.data});
            })
            .catch(function (error){
                console.log(error);
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