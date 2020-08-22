import React, { Component } from 'react';
import axios from 'axios';

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

        console.log(`Bike submitted:`);
        console.log(`Bike Name: ${this.state.bike_name}`);
        console.log(`Bike Type: ${this.state.bike_type}`);
        console.log(`Bike Wheel Size: ${this.state.bike_wheel_size}`);
        console.log(`Bike Completed: ${this.state.bike_completed}`);

        const newBike = {
            bike_name: this.state.bike_name,
            bike_type: this.state.bike_type,
            bike_wheel_size: this.state.bike_wheel_size,
            bike_completed: this.state.bike_completed
        }

        axios.post('http://localhost:4000/bikes/add', newBike)
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
            <div>
                <h3>Add New Bike</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.bike_name}
                                onChange={this.onChangeBikeName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Type: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.bike_type}
                                onChange={this.onChangeBikeType}
                                />
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="wheelSize"
                                    id='26"'
                                    value='26"'
                                    checked={this.state.bike_wheel_size==='26"'}
                                    onChange={this.onChangeBikeWheelSize}
                            />
                            <label className="form-check-label">26"</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="wheelSize"
                                    id='27.5"/650b'
                                    value='27.5"/650b'
                                    checked={this.state.bike_wheel_size==='27.5"/650b'}
                                    onChange={this.onChangeBikeWheelSize}
                            />
                            <label className="form-check-label">27.5"/650b</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="wheelSize"
                                    id='29"'
                                    value='29"'
                                    checked={this.state.bike_wheel_size==='29"'}
                                    onChange={this.onChangeBikeWheelSize}
                            />
                            <label className="form-check-label">29"</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="wheelSize"
                                    id='700c'
                                    value='700c'
                                    checked={this.state.bike_wheel_size==='700c'}
                                    onChange={this.onChangeBikeWheelSize}
                            />
                            <label className="form-check-label">700c</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Bike" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}
