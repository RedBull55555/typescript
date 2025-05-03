interface Product {
    id: number;
    name: string;
    price: number;
}

export class Movie implements Product { 
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public duration: number,
        public year?: number,
        public country?: string
    ) {}
}