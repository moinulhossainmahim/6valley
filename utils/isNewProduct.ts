export const isNewProduct = (createdAt: string) => {
  const now = new Date().getTime();
  const createdDate = new Date(createdAt).getTime();
  const timeDifference = Math.abs(now - createdDate);
  const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return dayDifference <= 30;
};
