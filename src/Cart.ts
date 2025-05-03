interface Product {
    id: number;
    name: string;
    price: number;
}

class Cart {
    private items: Product[] = [];

    add(item: Product): void {
        this.items.push(item);
    }

    getTotalPrice(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    getTotalPriceWithDiscount(discount: number): number {
        return this.getTotalPrice() * (1 - discount / 100);
    }

    removeItemById(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }

    getItems(): Product[] {
        return [...this.items];
    }
}

export default Cart;