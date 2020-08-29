import React, { Component } from 'react';
const client = require('../../../client');

class EditBike extends Component {

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

    componentDidMount() {
        client.get('/bikes/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    bike_name: response.data.bike_name,
                    bike_type: response.data.bike_type,
                    bike_f_wheel_size: response.data.bike_f_wheel_size,
                    bike_r_wheel_size: response.data.bike_r_wheel_size,
                    bike_size: response.data.bike_size,
                    bike_pedal: response.data.bike_pedal,
                    bike_saddle: response.data.bike_saddle,
                    bike_groupset: response.data.bike_groupset,
                    bike_fork: response.data.bike_fork,
                    bike_brakes: response.data.bike_brakes,
                    bike_stem_length: response.data.bike_stem_length,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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

        console.log(`Bike updated Chief!`);

        const updatedBike = {
            bike_name: this.state.bike_name,
            bike_type: this.state.bike_type,
            bike_f_wheel_size: this.state.bike_f_wheel_size,
            bike_r_wheel_size: this.state.bike_r_wheel_size,
            bike_size: this.state.bike_size,
            bike_pedal: this.state.bike_pedal,
            bike_saddle: this.state.bike_saddle,
            bike_groupset: this.state.bike_groupset,
            bike_fork: this.state.bike_fork,
            bike_brakes: this.state.bike_brakes,
            bike_stem_length: this.state.bike_stem_length
        };

        client.post('/bikes/update/'+this.props.match.params.id, updatedBike)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (

            <div>
                <div style={{float: "left", width: "33%%"}}>
                    <h2>Edit bike:</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">

                            <label>Name/Model: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_name}
                                    onChange={this.onChangeBikeName}
                            />

                            <label>Bike Type: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_type}
                                    onChange={this.onChangeBikeType}
                            />

                            <label>Bike Size: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_size}
                                    onChange={this.onChangeBikeSize}
                            />

                            <label>Front Wheel Size: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_f_wheel_size}
                                    onChange={this.onChangeBikeFWheel}
                            />

                            <label>Rear Wheel Size: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_r_wheel_size}
                                    onChange={this.onChangeBikeRWheel}
                            />

                            <label>Pedals: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_pedal}
                                    onChange={this.onChangeBikePedal}
                            />

                            <label>Saddle/Seat: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_saddle}
                                    onChange={this.onChangeBikeSaddle}
                            />

                            <label>Groupset: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_groupset}
                                    onChange={this.onChangeBikeGroup}
                            />

                            <label>Fork: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_fork}
                                    onChange={this.onChangeBikeFork}
                            />

                            <label>Brakes: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_brakes}
                                    onChange={this.onChangeBikeBrakes}
                            />

                            <label>Stem Length: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.bike_stem_length}
                                    onChange={this.onChangeBikeStemLength}
                            />
                            <br/>

                            <button type="submit" className="btn btn-primary">Save Bike</button>
                        </div>
                    </form>
                </div>
                <img src={process.env.PUBLIC_URL + '/bike-diagram.png'} style={{float: "right center", width: "67%", paddingTop: "10%"}} alt={""} />
            </div>

        )
    }
}

export default EditBike;