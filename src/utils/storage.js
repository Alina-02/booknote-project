const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Error storing data: ", error.message);
  }
};

const readData = async (key) => {
  try {
    const jsonValue = await localStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Error reading data: ", error.message);
  }
};

export { storeData, readData };
