import Cart from '../service/Cart';
import { Movie } from '../Movie';

describe('Cart', () => {
  let cart: Cart;
  const movie1 = new Movie(1, 'Inception', 500, 148, 2010, 'USA', 'Your mind is the scene of the crime', 'Sci-Fi', 'Christopher Nolan');
  const movie2 = new Movie(2, 'Tenet', 400, 150, 2020, 'USA', 'Time runs out', 'Action', 'Christopher Nolan');

  beforeEach(() => {
      cart = new Cart();
  });

  test('should add items', () => {
      cart.add(movie1);
      expect(cart.items.length).toBe(1);
  });

  test('should calculate total price', () => {
      cart.add(movie1);
      cart.add(movie2);
      expect(cart.getTotal()).toBe(900);
  });

  test('should calculate total with discount', () => {
      cart.add(movie1);
      cart.add(movie2);
      expect(cart.getTotalWithDiscount(10)).toBe(810);
  });

  test('should remove item by id', () => {
      cart.add(movie1);
      cart.add(movie2);
      cart.remove(1);
      expect(cart.items.find(i => i.id === 1)).toBeUndefined();
      expect(cart.items.length).toBe(1);
  });
});