import React, { Component } from 'react';

class Input extends Component {

    state = {

        srpAvg: '',
        srpIncrease: '',
        time: '',
        solarMonthly: '',

        futureMonthly: '',
        srpYearly: '',
        srpToYear: '',
        srpTotal: '',
        srpThirty: '',

        solarYearly: '',
        solarToYear: '',
        solarTotal: '',
        
    }

// SET FUNCTIONS
    setSolarMonthly = (e) => {
        this.setState({ solarMonthly: e.target.value });
    };

    setSolarTotal = (e) => {
        this.setState({ solarTotal: e.target.value });
    }

    setSrpAvg = (e) => {
        this.setState({ srpAvg: e.target.value });
    };

    setSrpIncrease = (e) => {
        this.setState({ srpIncrease: e.target.value });
    }

    setTime = (e) => {
        this.setState({ time: e.target.value });
    };

// DISPLAY
    // displaySolarMonthly = () => {
    //     return <p>Your new monthly: {this.state.solarMonthly}</p>
    // }

    // displaySolarTotal = () => {
    //     return <p>Your total cost for solar: {this.state.solarTotal}</p>
    // }

    // displaySrpAvg = () => {
    //     return <p>Your current monthly average: {this.state.srpAvg}</p>
    // }

    // displayRateIncrease = () => {
    //     return <p>Utility annual rate increase: {this.state.srpIncrease}</p>
    // }

    // displayTime = () => {
    //     return <p>Years: {this.state.time}</p>
    // }

// GENERATE REPORT
    calculate = () => {
        let srpAvg = Number(this.state.srpAvg);
        let srpIncrease = Number(this.state.srpIncrease);
        let time = Number(this.state.time);
        let solarMonthly = Number(this.state.solarMonthly);

        let srpYearly = srpAvg * 12;
        let srpTotal = srpYearly;
        let srpThirty = srpYearly;
        let futureMonthly = srpAvg;
        let futureMonthly1 = srpAvg;

        let solarYearly = solarMonthly * 12;
        let solarToYear = solarYearly * (time);

        for(let i = 1; i < time; i++) {
            let increase = futureMonthly * srpIncrease;
            futureMonthly += increase;
            srpTotal += futureMonthly * 12;
        }

        for(let i = 1; i < 30; i++) {
            let increase = futureMonthly1 * srpIncrease;
            futureMonthly1 += increase;
            srpThirty += futureMonthly1 * 12;
        }

        this.setState({ futureMonthly: futureMonthly.toFixed(2), srpYearly: srpYearly, srpTotal: srpTotal.toFixed(2), srpThirty: srpThirty.toFixed(2), solarToYear: solarToYear, solarYearly: solarYearly });
    }

    displayReport = () => {
        return <div>
                    <p>Your cost to SRP in 30 years: {this.state.srpThirty}</p>
                    {this.state.time > 1 ? 
                        <div>
                        <p>Your monthly average in {this.state.time} years: {this.state.futureMonthly}</p>
                        <p>Your total cost to SRP in {this.state.time} years: {this.state.srpTotal}</p>
                        </div> :
                        <div>
                        <p>Your monthly average next year: {this.state.futureMonthly}</p>
                        <p>Your total cost to SRP this year: {this.state.srpTotal}</p>
                        </div>}
                    <br></br>
                    <p>Your fixed solar payment: {this.state.solarMonthly}</p>
                    <p>Your total cost for solar: {this.state.solarTotal}</p>
                    {this.state.time > 1 ? 
                        <p>Your cost for solar in {this.state.time} years: {this.state.solarToYear}</p> :
                        <p>Your cost for solar in this year: {this.state.solarToYear}</p>}
                    <br></br>
                    <p>Your savings in {this.state.time} years: {this.state.srpTotal - this.state.solarToYear}</p>
                    <p>Your savings in 30 years: {this.state.srpThirty - this.state.solarTotal}</p>
                </div>
    }


    render() {
        return (
            <div>
                <div className="photo">
                    <img src='solarnation.png' alt="Company Logo"/>
                </div>
                {/* {this.displaySolarMonthly()}
                {this.displaySolarTotal()}
                {this.displaySrpAvg()}
                {this.displayRateIncrease()}
                {this.displayTime()} */}
                <input type="text" onChange={ this.setSolarMonthly } value={ this.state.solarMonthly } placeholder="Solar Monthly" />
                <input type="text" onChange={ this.setSolarTotal } value={ this.state.solarTotal } placeholder="Solar Total" />
                <input type="text" onChange={ this.setSrpAvg } value={ this.state.srpAvg } placeholder="Current Average" />
                <input type="text" onChange={ this.setTime } value={ this.state.time } placeholder="Years" />
                <select type="text" onChange={ this.setSrpIncrease } value={this.state.srpIncrease } placeholder="Rate">
                    <option value="0">0%</option>
                    <option value=".01">1%</option>
                    <option value=".02">2%</option>
                    <option value=".03">3%</option>
                    <option value=".04">4%</option>
                </select>
                <input type="button" value="Submit" onClick={this.calculate} />
                <p>REPORT {this.displayReport()}</p>
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
// } 62,763 - 65,378.95 - 47,380.42