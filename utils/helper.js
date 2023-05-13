export const calDiscountPercentage = (original, price) => {
  const discount = original - price;
  const per = (discount / original) * 100;
  return per.toFixed(2);
};
