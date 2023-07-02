export interface Tour {
    id: string,
    name: string,
    image: string,
    startDate: string, 
    endDate: string,
    duration: string,
    price: number,
    location: string,
    country: string,
    description: string,
    category: string[]
}

export interface Category {
    name: string,
    description: string,
    route: string
}