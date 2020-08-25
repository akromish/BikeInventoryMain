import React, { Component } from 'react';
const client = require('../client');

class CreateBike extends Component {

    constructor(props) {

        super(props);

        this.onChangeBikeName = this.onChangeBikeName.bind(this);
        this.onChangeBikeType = this.onChangeBikeType.bind(this);
        this.onChangeBikeFWheel = this.onChangeBikeFWheel.bind(this);
        this.onChangeBikeRWheel = this.onChangeBikeRWheel.bind(this);
        this.onChangeBikeSize = this.onChangeBikeSize.bind(this);
        this.onChangeBikePedal = this.onChangeBikePedal.bind(this);
        this.onChangeBikeSaddle = this.onChangeBikeSaddle.bind(this);
        this.onChangeBikeGroup = this.onChangeBikeGroup.bind(this);
        this.onChangeBikeFork = this.onChangeBikeFork.bind(this);
        this.onChangeBikeBrakes = this.onChangeBikeBrakes.bind(this);
        this.onChangeBikeStemLength = this.onChangeBikeStemLength.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            bike_name: '',
            bike_type: '',
            bike_f_wheel_size: '',
            bike_r_wheel_size: '',
            bike_size: '',
            bike_pedal:'',
            bike_saddle: '',
            bike_groupset: '',
            bike_fork: '',
            bike_brakes: '',
            bike_stem_length: ''
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

    onChangeBikeFWheel(e) {
        this.setState({
            bike_f_wheel_size: e.target.value
        });
    }

    onChangeBikeRWheel(e) {
        this.setState({
            bike_r_wheel_size: e.target.value
        });
    }

    onChangeBikeSize(e) {
        this.setState({
            bike_size: e.target.value
        });
    }

    onChangeBikePedal(e) {
        this.setState({
            bike_pedal: e.target.value
        });
    }

    onChangeBikeSaddle(e) {
        this.setState({
            bike_saddle: e.target.value
        });
    }

    onChangeBikeGroup(e) {
        this.setState({
            bike_groupset: e.target.value
        });
    }

    onChangeBikeFork(e) {
        this.setState({
            bike_fork: e.target.value
        });
    }

    onChangeBikeBrakes(e) {
        this.setState({
            bike_brakes: e.target.value
        });
    }

    onChangeBikeStemLength(e) {
        this.setState({
            bike_stem_length: e.target.value
        });
    }

    onSubmit(e) {

        e.preventDefault();

        console.log(`Bike submitted Chief!`);

        const newBike = {
            bike_name: this.state.bike_name,
            bike_type: this.state.bike_type,
            bike_f_wheel_size: this.state.bike_f_wheel_size,
            bike_rear_wheel_size: this.state.bike_r_wheel_size,
            bike_size: this.state.bike_size,
            bike_pedal: this.state.bike_pedal,
            bike_saddle: this.state.bike_saddle,
            bike_groupset: this.state.bike_groupset,
            bike_fork: this.state.bike_fork,
            bike_brakes: this.state.bike_brakes,
            bike_stem_length: this.state.bike_stem_length
        }

        client.post('/bikes/add/', newBike)
            .then(res => console.log(res.data));

        this.setState({
            bike_name: '',
            bike_type: '',
            bike_f_wheel_size: '',
            bike_rear_wheel_size: '',
            bike_size: '',
            bike_pedal:'',
            bike_saddle: '',
            bike_groupset: '',
            bike_fork: '',
            bike_brakes: '',
            bike_stem_length: ''
        })

    }

    render() {
        return (
            <div>
                <h3>Add New Bikes</h3>
                <form onSubmit={this.onSubmit}>
                            <label>Name/Model: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_name}
                                    onChange={this.onChangeBikeName}
                            />
                </form>
            </div>
        )
    }
}

export default CreateBike;
