export interface Pizza {
    name: string;
    toppings: {
        id: number,
        name: string
    }[];
    id: number;
    count: number;
}

export interface Topping {
    id: number;
    name: string;
    count: number;
}
