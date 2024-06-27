export const getProducts = async () => {
  try {
    const response = await fetch(
      'https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&&offset=1',
      {
        method: "GET",
          headers: {
          accept: "application/json",
        },
      }
    )
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
