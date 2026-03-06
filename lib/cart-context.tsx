'use client';

import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  type ReactNode,
} from 'react';
import type { Product, CartItem } from './types';

/* ═══════════════════════════════════════════════════════════════
   State
   ═══════════════════════════════════════════════════════════════ */

interface CartState {
  items: CartItem[];
  promoCode: string | null;
  promoError: string | null;
}

const initialState: CartState = {
  items: [],
  promoCode: null,
  promoError: null,
};

/* ═══════════════════════════════════════════════════════════════
   Actions
   ═══════════════════════════════════════════════════════════════ */

type CartAction =
  | {
      type: 'ADD_ITEM';
      payload: {
        product: Product;
        selectedColor: string;
        selectedSize: string;
      };
    }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; selectedColor: string; selectedSize: string } }
  | {
      type: 'UPDATE_QUANTITY';
      payload: { productId: string; selectedColor: string; selectedSize: string; quantity: number };
    }
  | { type: 'APPLY_PROMO'; payload: { code: string } }
  | { type: 'CLEAR_CART' };

/* ═══════════════════════════════════════════════════════════════
   Promo codes
   ═══════════════════════════════════════════════════════════════ */

const PROMO_CODES: Record<string, number> = {
  MAISON10: 0.1,
};

/* ═══════════════════════════════════════════════════════════════
   Reducer
   ═══════════════════════════════════════════════════════════════ */

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, selectedColor, selectedSize } = action.payload;

      const existingIndex = state.items.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize,
      );

      if (existingIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { product, quantity: 1, selectedColor, selectedSize },
        ],
      };
    }

    case 'REMOVE_ITEM': {
      const { productId, selectedColor, selectedSize } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(
              item.product.id === productId &&
              item.selectedColor === selectedColor &&
              item.selectedSize === selectedSize
            ),
        ),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, selectedColor, selectedSize, quantity } =
        action.payload;

      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) =>
              !(
                item.product.id === productId &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
              ),
          ),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === productId &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
            ? { ...item, quantity }
            : item,
        ),
      };
    }

    case 'APPLY_PROMO': {
      const code = action.payload.code.toUpperCase().trim();

      if (state.promoCode) {
        return {
          ...state,
          promoError: 'Un codice promozionale e gia applicato.',
        };
      }

      if (!PROMO_CODES[code]) {
        return {
          ...state,
          promoError: 'Codice promozionale non valido.',
          promoCode: null,
        };
      }

      return {
        ...state,
        promoCode: code,
        promoError: null,
      };
    }

    case 'CLEAR_CART': {
      return initialState;
    }

    default:
      return state;
  }
}

/* ═══════════════════════════════════════════════════════════════
   Context value
   ═══════════════════════════════════════════════════════════════ */

interface CartContextValue {
  items: CartItem[];
  addItem: (
    product: Product,
    selectedColor: string,
    selectedSize: string,
  ) => void;
  removeItem: (
    productId: string,
    selectedColor: string,
    selectedSize: string,
  ) => void;
  updateQuantity: (
    productId: string,
    selectedColor: string,
    selectedSize: string,
    quantity: number,
  ) => void;
  applyPromo: (code: string) => void;
  clearCart: () => void;
  subtotal: number;
  discount: number;
  total: number;
  promoCode: string | null;
  promoError: string | null;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

/* ═══════════════════════════════════════════════════════════════
   Provider
   ═══════════════════════════════════════════════════════════════ */

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const subtotal = useMemo(
    () =>
      state.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
      ),
    [state.items],
  );

  const discount = useMemo(() => {
    if (!state.promoCode || !PROMO_CODES[state.promoCode]) return 0;
    return subtotal * PROMO_CODES[state.promoCode];
  }, [subtotal, state.promoCode]);

  const total = subtotal - discount;

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      addItem: (product, selectedColor, selectedSize) =>
        dispatch({
          type: 'ADD_ITEM',
          payload: { product, selectedColor, selectedSize },
        }),
      removeItem: (productId, selectedColor, selectedSize) =>
        dispatch({
          type: 'REMOVE_ITEM',
          payload: { productId, selectedColor, selectedSize },
        }),
      updateQuantity: (productId, selectedColor, selectedSize, quantity) =>
        dispatch({
          type: 'UPDATE_QUANTITY',
          payload: { productId, selectedColor, selectedSize, quantity },
        }),
      applyPromo: (code) =>
        dispatch({ type: 'APPLY_PROMO', payload: { code } }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      subtotal,
      discount,
      total,
      promoCode: state.promoCode,
      promoError: state.promoError,
    }),
    [state, subtotal, discount, total],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* ═══════════════════════════════════════════════════════════════
   Hook
   ═══════════════════════════════════════════════════════════════ */

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a <CartProvider>');
  }
  return context;
}
