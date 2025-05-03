import Cart from '../../Cart';
import { Movie } from '../../Movie';

const movie1 = new Movie(1, 'Inception', 100, 148, 2010, 'USA');
const movie2 = new Movie(2, 'Interstellar', 200, 169, 2014, 'USA');

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('new cart should be empty', () => {
    expect(cart.getItems().length).toBe(0);
  });

  describe('getTotalPrice', () => {
    test('returns sum of product prices', () => {
      cart.add(movie1);
      cart.add(movie2);
      expect(cart.getTotalPrice()).toBe(300);
    });
  });

  describe('getTotalPriceWithDiscount', () => {
    test('applies discount correctly', () => {
      cart.add(movie1);
      cart.add(movie2);
      expect(cart.getTotalPriceWithDiscount(10)).toBe(270); // 300 - 10% = 270
      expect(cart.getTotalPriceWithDiscount(100)).toBe(0); // 100% скидка
    });
  });

  describe('removeItemById', () => {
    test('removes item by id', () => {
      cart.add(movie1);
      cart.add(movie2);
      cart.removeItemById(1);
      expect(cart.getItems()).toEqual([movie2]);
    });

    test('does nothing if id not found', () => {
      cart.add(movie1);
      cart.removeItemById(999);
      expect(cart.getItems()).toEqual([movie1]);
    });
  });
});