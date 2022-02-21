import React from "react";
import Meals from "./Components/Food/Meals";

import Header from "./Components/Structure/Header";

function App() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Meals />
            </main>
        </React.Fragment>
    );
}

export default App;
