const getDiscount = (code) => {
  const discountCodes = {
    DISCOUNT: 0.10,
  };

  return discountCodes[code];
},
applyPromoDiscount = (code, total) => {
  const validDiscount = getDiscount(code);


  const discountedPrice = total - validDiscount * total;

  return discountedPrice.toFixed(2);
};

export default applyPromoDiscount;
