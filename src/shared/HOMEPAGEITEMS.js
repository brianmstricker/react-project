import burger from '../assets/burger-small.jpg';
import pizza from '../assets/pizza-small.jpg';
import pasta from '../assets/pasta-small.jpg';

export const PAGEITEMS = [
    {
        id: 0,
        name: 'Burger',
        image: burger,
        description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled.',
        featured: true,
        price: '$8.99'
    },
    {
        id: 1,
        name: 'Cheese Pizza',
        image: pizza,
        description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.',
        featured: true,
        price: '$15.99'
    },
    {
        id: 2,
        name: 'Pasta',
        image: pasta,
        description: 'Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. It is also commonly used to refer to the variety of pasta dishes.',
        featured: true,
        price: '$12.99'
    }
];