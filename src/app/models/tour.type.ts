export interface Tour {
    name: string,
    image: string,
    duration: string,
    price: number,
    location: string,
    country: string,
    type: string,
    description: string
}

export enum TourTypes{
    children = "Programok óvodásoknak",
    school = "Nyári táborok",
    family = "Családi",
    business = "Csapatépítő",
    friends = "Baráti társaságok",
    leisure = "Kikapcsolódás",
    adventure = "Kalandtúra",
    mountains = "Csúcshódítás",
    short = "Egynapos",
    free = "Ingyenes túráink"
}