import { DateRange, isRangeAvailable } from "./index";

/**
 * Tests pour la fonction isRangeAvailable
 */
describe("Vérification de la couverture des plages de dates", () => {

    it("Doit retourner true si la période demandée est couverte par la période disponible", () => {
        const availableRange: DateRange = {
            startDate: new Date('2024-01-15'),
            endDate: new Date('2024-05-20'),
        };
        const requestedRange: DateRange = {
            startDate: new Date('2024-02-10'),
            endDate: new Date('2024-04-25'),
        };
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
    });

    it("Doit retourner false si la plage demandée commence avant la plage disponible", () => {
        const availableRange: DateRange = {
            startDate: new Date('2024-04-01'),
            endDate: new Date('2024-07-31'),
        };
        const requestedRange: DateRange = {
            startDate: new Date('2024-03-10'),
            endDate: new Date('2024-05-10'),
        };
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
    });

    it("Doit retourner false si la plage demandée se termine après la plage disponible", () => {
        const availableRange: DateRange = {
            startDate: new Date('2024-06-01'),
            endDate: new Date('2024-08-15'),
        };
        const requestedRange: DateRange = {
            startDate: new Date('2024-07-01'),
            endDate: new Date('2024-08-20'),
        };
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
    });

    it("Doit retourner false si la plage demandée est en dehors de la plage disponible", () => {
        const availableRange: DateRange = {
            startDate: new Date('2024-09-01'),
            endDate: new Date('2024-12-15'),
        };
        const requestedRange: DateRange = {
            startDate: new Date('2024-01-01'),
            endDate: new Date('2024-02-28'),
        };
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
    });

    it("Doit retourner true si la plage demandée coïncide exactement avec la plage disponible", () => {
        const availableRange: DateRange = {
            startDate: new Date('2024-10-01'),
            endDate: new Date('2024-10-31'),
        };
        const requestedRange: DateRange = {
            startDate: new Date('2024-10-01'),
            endDate: new Date('2024-10-31'),
        };
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
    });
});
