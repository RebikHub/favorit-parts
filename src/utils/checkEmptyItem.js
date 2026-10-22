export const checkEmptyItem = (array) => {
  if (array && Array.isArray(array) && array.length === 1 && array?.[0].goodsID === "00000000-0000-0000-0000-000000000000" && !array?.[0]?.analogues) {
    return true
  }

  return false
}
