import styles from "./Summary.module.css"

const Summary = () => {
    return (
        <section className={styles.summary}>
            <h2>Generic Restaurant Name Here</h2>
            <p>
                The choice is easy when it's real food.
                Eat real. Feel real.
            </p>
            <p>
                Feel good about the food you're ordering. 
                Don't hesitate to call us for any advice. 
                We're here to help you!
            </p>
        </section>
    );
}

export default Summary;