import styles from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MEALS_DATA = [
    {
        id: 'm1',
        name: 'BLUEFIN TUNA TARTARE',
        description: 'Avocado, Crispy Shallots, Wasabi Soy Dressing',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'HAMACHI',
        description: 'With Serrano, Yuzu Truffle Dressing',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'CRISPY DUCK SALAD',
        description: 'Mix Green Salad, Orange + Grapefruit, Hoisin Vinaigrette',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'GRILLED ATLANTIC SALMON',
        description: 'Asian Green Beans + Confit Onion',
        price: 18.99,
    },
    {
        id: 'm5',
        name: 'SPICY SEAFOOD SOUP',
        description: 'Manila Clams, Shrimp + Bok Choy',
        price: 14.99,
    },
];

const AvailableMeals = () => {
    const mealsList = MEALS_DATA.map(meal => <MealItem key={meal.id} item={meal} />);

    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;