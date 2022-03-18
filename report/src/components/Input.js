import React, { Component } from 'react';

class Input extends Component {

    state = {

        srpAvg: '',
        srpIncrease: '',
        time: '',
        solarMonthly: '',

        srpYearly1: '',
        srpToYear1: '',
        futureMonthly1: '',
        srpTotal1: '',
        solarYearly1: '',
        solarToYear1: ''
        
    }

// SET FUNCTIONS
    setSrpAvg = (e) => {
        this.setState({ srpAvg: e.target.value });
    };

    setSolarMonthly = (e) => {
        this.setState({ solarMonthly: e.target.value });
    };

    setSrpIncrease = (e) => {
        this.setState({ srpIncrease: e.target.value });
    }

    setTime = (e) => {
        this.setState({ time: e.target.value });
    };

// DISPLAY
    displaySrpAvg = () => {
        return <p>Your current monthly average: {this.state.srpAvg}</p>
    }

    displaySolarMonthly = () => {
        return <p>Your new monthly: {this.state.solarMonthly}</p>
    }

    displayRateIncrease = () => {
        return <p>Utility annual rate increase: {this.state.srpIncrease}</p>
    }

    displayTime = () => {
        return <p>Years: {this.state.time}</p>
    }

// GENERATE REPORT
    calculate = () => {
        let srpAvg = Number(this.state.srpAvg);
        let srpIncrease = Number(this.state.srpIncrease);
        let time = Number(this.state.time);
        let solarMonthly = Number(this.state.solarMonthly);

        let srpYearly = srpAvg * 12;
        let srpTotal = srpYearly;
        let futureMonthly = srpAvg;

        let solarYearly = solarMonthly * 12;
        let solarToYear = solarYearly * (time + 1);

        for(let i = 1; i <= time; i++) {
            let increase = futureMonthly * Number(srpIncrease);
            // console.log("!!!!!!!!!!!!!!", srpIncrease, increase, futureMonthly);
            futureMonthly += increase;
            // console.log("............", futureMonthly)
            srpTotal += futureMonthly * 12;
        }

        // let savings = srpTotal - solarToYear;
        // console.log('===================>', savings)

        // console.log('===>', srpYearly, srpTotal, futureMonthly, solarYearly, solarToYear)
    
        this.setState({ srpYearly1: srpYearly, srpTotal1: srpTotal, futureMonthly1: futureMonthly, solarToYear1: solarToYear, solarYearly1: solarYearly })
    }

    displayReport = () => {
        return this.state.srpTotal1;
    }


    render() {
        return (
            <div>
                {this.displaySrpAvg()}
                {this.displaySolarMonthly()}
                {this.displayRateIncrease()}
                {this.displayTime()}
                <h1>Your Savings: {this.displayReport()}</h1>
                <input type="text" onChange={ this.setSolarMonthly } value={ this.state.solarMonthly } placeholder="Solar Monthly" />
                <input type="text" onChange={ this.setSrpAvg } value={ this.state.srpAvg } placeholder="Current Average" />
                <input type="text" onChange={ this.setTime } value={ this.state.time } placeholder="Years" />
                <select type="text" onChange={ this.setSrpIncrease } value={this.state.srpIncrease } placeholder="Rate">
                    <option value="0">0%</option>
                    <option value=".01">1%</option>
                    <option value=".02">2%</option>
                    <option value=".03">3%</option>
                    <option value=".04">4%</option>
                </select>
                <input type="button" value="Submit" onClick={ this.calculate } />
            </div>
        );
    }
}

export default Input;


// calculate = () => {
//     let srpAvg = this.state.srpAvg;
//     let srpIncrease = this.state.srpIncrease;
//     let time = this.state.time;
//     let solarMonthly = this.state.solarMonthly;

//     let srpYearly = srpAvg * 12;
//     let srpTotal = srpYearly;
//     let futureMonthly = srpAvg * (time + 1);

//     let solarYearly = solarMonthly * 12;
//     let solarToYear = solarYearly * time;

//     for(let i = 1; i <= time; i++) {
//     let increase = futureMonthly * srpIncrease - futureMonthly
//     futureMonthly += increase
//     srpTotal += futureMonthly * 12
//     console.log('====>', increase, srpTotal)
//     }

//     let savings = srpTotal - solarToYear
// }