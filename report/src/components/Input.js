import React, { Component } from 'react';

class Input extends Component {

    state = {

        srpAvg: '',
        srpYearly: '',
        srpToYear: '',
        srpIncrease: '',

        solarMonthly: '',
        solarYearly: '',
        solarToYear: '',

        futureMonthly: ''

        //     let savings = srpTotal - solarToYear
        
    }

    setSrpAvg = (e) => {
        this.setState({ srpAvg: e.target.value });
    };

    setSolarMonthly = (e) => {
        this.setState({ solarMonthly: e.target.value });
    };


    displaySrpAvg = () => {
        return this.state.srpAvg
    }

    displaySolarMonthly = () => {
        return this.state.solarMonthly
    }

    calculate = () => {
        let avg = this.state.srpAvg;
        let solar = this.state.solarMonthly;
        let savings = avg - solar;
        return <p>{savings}</p>
    }

    render() {
        return (
            <div>
                <p>{this.displaySrpAvg()}</p>
                <p>{this.displaySolarMonthly()}</p>
                <p>Your Savings: {this.calculate()}</p>
                <input type="text" onChange={ this.setSrpAvg } value={ this.state.srpAvg } placeholder="Current Average" />
                <input type="text" onChange={ this.setSolarMonthly } value={ this.state.solarMonthly } placeholder="Solar Monthly" />
            </div>
        );
    }
}

export default Input;