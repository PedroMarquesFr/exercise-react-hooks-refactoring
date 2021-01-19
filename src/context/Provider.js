// src/context/Provider.js

import PropTypes from "prop-types";
import React, { useState } from "react";
import CarsContext from "./CarsContext";

function Provider({ children }) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cars: {
  //       red: false,
  //       blue: false,
  //       yellow: false,
  //     },
  //     signal: {
  //       color: 'red',
  //     },
  //   }
  //   this.moveCar = this.moveCar.bind(this);
  //   this.changeSignal = this.changeSignal.bind(this);
  // }
  const [context, setContext] = useState({
    cars: {
      red: true,
      blue: false,
      yellow: false,
    },
    signal: {
      color: "red",
    },
  });

  const moveCar = (car, side) => {
    setContext({
      ...context,
      cars: {
        ...context.cars,
        [car]: side,
      },
    });
  };

  const changeSignal = (signalColor) => {
    setContext({
      ...context,
      signal: {
        ...context.signal,
        color: signalColor,
      },
    });
  };

  const contextParser = {
    ...context,
    moveCar,
    changeSignal,
  };

  return (
    <CarsContext.Provider value={contextParser}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
