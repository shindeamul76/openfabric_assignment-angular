export interface SignUp {
    name: string,
    email: string,
    password: string
}

export interface Login {
    email: string,
    password: string
}

export interface Product {
    name: string,
    price: number,
    category: string,
    color: string,
    description: string,
    image: string,
    _id: string,
}