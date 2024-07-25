import { submitOrder, Order } from './index';
import { sendOrderEmail } from './lib/email';

/**
 * Mock de la fonction sendOrderEmail pour éviter l'envoi d'e-mails réels pendant les tests
 */
jest.mock('./lib/email', () => ({
    sendOrderEmail: jest.fn(),
}));

/**
 * Tests pour la fonction submitOrder
 */
describe("Vérification de la gestion et validation des soumissions de commandes", () => {

    it("Doit marquer la commande comme soumise et appeler sendOrderEmail", () => {
        const order: Order = { id: '5678', isSubmitted: false };
        const updateOrder = submitOrder(order);

        expect(updateOrder.isSubmitted).toBe(true);
        expect(sendOrderEmail).toHaveBeenCalledWith('5678');
    });

    it("Doit émettre une erreur si la commande est déjà soumise", () => {
        const order: Order = { id: '5678', isSubmitted: true };

        expect(() => submitOrder(order)).toThrow('La commande est déjà soumise');
    });
});
