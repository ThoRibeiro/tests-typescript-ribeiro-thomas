export type DateRange = {
    startDate: Date;
    endDate: Date;
};

/**
 * Vérifie si une plage de dates demandée est couverte par une plage de dates disponible.
 */
export function isRangeAvailable(
    requestedRange: DateRange,
    availableRange: DateRange
): boolean {
  return (
      requestedRange.startDate >= availableRange.startDate &&
      requestedRange.endDate <= availableRange.endDate
  );
}
