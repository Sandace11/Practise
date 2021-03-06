import React from "react";

import Summary from "./Summary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    return (
        <React.Fragment>
            <Summary />
            <AvailableMeals />
        </React.Fragment>
    );
}

export default Meals;