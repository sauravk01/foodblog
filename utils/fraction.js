export const getFraction = (decimal) => {
  for (var denominator = 1; (decimal * denominator) % 1 !== 0; denominator++);
  return { numerator: decimal * denominator, denominator: denominator };
};
