export const getProducts = async (url: string) => {
  try {
    const response = await fetch(
      url,
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
