import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Meals from "./Components/Meals/Meals";

import Header from "./Components/Structure/Header";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

    return (
        <React.Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onCartClick={showCartHandler}/>
            <main>
                <Meals />
            </main>
        </React.Fragment>
    );
}

export default App;
