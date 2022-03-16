import React, { Component } from 'react';

class Calculator extends Component {

    state = {

    }

    generateReport = () => {
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Calculator;





// const calculator = (srpAvg, srpIncrease, time, solarMonthly, solarTotal) => {

//     let solarYearly = solarMonthly * 12;
//     let solarToYear = solarYearly * (time + 1);
    
//     let srpYearly = srpAvg * 12;
//     let srpTotal = srpYearly;
//     let futureMonthly = srpAvg;
  
//     for(let i = 1; i <= time; i++) {
//       let increase = futureMonthly * srpIncrease - futureMonthly
//       futureMonthly += increase
//       srpTotal += futureMonthly * 12
//     }
  
//     let savings = srpTotal - solarToYear
  
//     console.log('SRP')
//     console.log("Current Monthly:", srpAvg)
//     console.log("This year's cost:", srpYearly)
//     console.log(`Future Monthly in ${time} years:`, futureMonthly) //.toFixed()
//     console.log(`Total cost to SRP in ${time} years:`, srpTotal)
//     console.log(' ')
//     console.log('SOLAR')
//     console.log("Solar Monthly:", solarMonthly)
//     console.log("This year's cost:", solarYearly)
//     console.log(`Future Monthly in ${time} years:`, solarMonthly) //.toFixed()
//     console.log(`Total cost for solar in ${time} years:`, solarToYear)
//     console.log(' ')
//     console.log(`Your savings in ${time} years:`, savings)
//   }
  
//   console.log(calculator(179, 1.04, 5, 99, 28,000))