import { sendOrderEmail } from './lib/email';

export type Order = {
  id: string;
  isSubmitted: boolean;
};

/**
 * Fait le changement d'état pour l'envoie d'email
 */
export function submitOrder(order: Order): Order {
  if (order.isSubmitted) {
    throw new Error('La commande est déjà soumise');
  }
  order.isSubmitted = true;
  sendOrderEmail(order.id);
  return order;
}