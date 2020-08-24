import React, { Component } from 'react';
import './create-bikes.css';
const client = require('../client');

export default class CreateBike extends Component {

    constructor(props) {

        super(props);

        this.onChangeBikeName = this.onChangeBikeName.bind(this);
        this.onChangeBikeType = this.onChangeBikeType.bind(this);
        this.onChangeBikeWheelSize = this.onChangeBikeWheelSize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //creating bike object
        this.state = {
            bike_name: '',
            bike_type: '',
            bike_wheel_size: '',
            bike_completed: false
        }
    }

    onChangeBikeName(e) {
        this.setState({
            bike_name: e.target.value
        });
    }

    onChangeBikeType(e) {
        this.setState({
            bike_type: e.target.value
        });
    }

    onChangeBikeWheelSize(e) {
        this.setState({
            bike_wheel_size: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Bikes submitted:`);
        console.log(`Bikes Name: ${this.state.bike_name}`);
        console.log(`Bikes Type: ${this.state.bike_type}`);
        console.log(`Bikes Wheel Size: ${this.state.bike_wheel_size}`);
        console.log(`Bikes Completed: ${this.state.bike_completed}`);

        const newBike = {
            bike_name: this.state.bike_name,
            bike_type: this.state.bike_type,
            bike_wheel_size: this.state.bike_wheel_size,
            bike_completed: this.state.bike_completed
        }


        client.post('/bikes/add/', newBike)
            .then(res => console.log(res.data));

        this.setState({
            bike_name: '',
            bike_type: '',
            bike_wheel_size: '',
            bike_completed: false
        })
    }

    render() {
        return (
            <div className="diagram">
                <div className="form-space">
                    <h3>Add New Bikes</h3>

                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col">
                                <label>Name: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.bike_name}
                                        onChange={this.onChangeBikeName}
                                />
                            </div>
                            <div className="col">
                                <label>Name: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.bike_name}
                                        onChange={this.onChangeBikeName}
                                />
                            </div>

                        </div>


                    </form>
                </div>
            </div>
        )
    }
}
