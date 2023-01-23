import React, { useEffect } from "react";
import "./TemperatureDisplay.css";
import { Component } from "react";
import { useState } from "react";

/////Class Component

// class TemperatureDisplay extends Component {
//   constructor() {
//     super();

//     this.state = { temp: 25, class: "" };

//     this.plusHandler = this.plusHandler.bind(this);
//     this.minusHandler = this.minusHandler.bind(this);
//   }

//   plusHandler() {
//     this.setState((prevState) => {
//       return { temp: prevState.temp + 1 };
//     }, () => {
//       {
//       this.state.temp >= 30 && this.setState({ class: "hot" });
//     }
//     {
//       this.state.temp > 20 &&
//         this.state.temp < 30 &&
//         this.setState({ class: "" });
//     }
//     });
    
//   }
//   minusHandler() {
//     this.setState((prevState) => {
//       return { temp: prevState.temp - 1 };
//     }, () => {
//       {
//       this.state.temp < 20 && this.setState({ class: "cold" });
//     }
//     {
//       this.state.temp > 20 &&
//         this.state.temp < 30 &&
//         this.setState({ class: "" });
//     }
//     });

    
//   }

//   render() {
//     return (
//       <div className="body">
//         <div className="container">
//           <div className="temp">
//             <p className={this.state.class} style={{ display: "inline" }}>
//               {this.state.temp}
//               <span
//                 style={{
//                   display: "inline",
//                   fontFamily: "sans-sarif",
//                   fontSize: "85px",
//                 }}
//               >
//                 °C
//               </span>
//             </p>
//           </div>
//           <div className="change">
//             <button onClick={this.minusHandler}>-</button>
//             <button onClick={this.plusHandler}>+</button>
//           </div>
//         </div>
//         <p className="des">
//           <strong>Description:</strong> If the temperature goes up, the color
//           turns red, if the temperature goes down, it turns blue.
//         </p>
//       </div>
//     );
//   }
// }

///// Functional Component

const TemperatureDisplay = () => {
  const [temp, setTemp] = useState(25);
  const [className, setClassName] = useState("");

  useEffect(() => {
    {
      temp < 20 && setClassName("cold");
    }
    {
      temp > 20 && temp < 30 && setClassName("");
    }
    {
      temp >= 30 && setClassName("hot");
    }
    {
      temp > 20 && temp < 30 && setClassName("");
    }
  }, [temp])

  const minusHandler = () => {
    setTemp(prevState => prevState - 1);
  };

  const plusHandler = () => {
    setTemp(prevState => prevState + 1);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="temp">
          <p className={className} style={{ display: "inline" }}>
            {temp}
            <span className="degree">°C</span>
          </p>
        </div>
        <div className="change">
          <button onClick={minusHandler}>-</button>
          <button onClick={plusHandler}>+</button>
        </div>
      </div>
      <p className="des">
        <strong>Description:</strong> If the temperature goes up, the color
        turns red, if the temperature goes down, it turns blue.
      </p>
    </div>
  );
};

export default TemperatureDisplay;
