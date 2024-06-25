const queryStrings = {
  app_id: process.env.REACT_APP_APP_ID,
  app_key: process.env.REACT_APP_APP_KEY,
};

console.log("App ID:", queryStrings.app_id); // Debugging log
console.log("App Key:", queryStrings.app_key); // Debugging log

export const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;
  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`,
    );
    const data = await response.json();
    console.log("line no.13", response);
    console.log("line no.14", data);
    return data;
  } catch (e) {
    console.log(e, "Something went wrong");
    return e;
  }
};

export const fetchTabData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;
  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`,
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e, "Something went wrong");
    return e;
  }
};
