import { LOCAL_STORAGE_KEY } from "./constants";
import wrapPromise from "./wrapPromise";

const loadBookAsync = async (key) => {
  try {
    const response = localStorage.getItem(LOCAL_STORAGE_KEY);
    const arrayRes = await JSON.parse(response);

    const selected = arrayRes.filter((obj) => obj.id == key);

    return selected[0];
  } catch (error) {
    console.log(error);
  }
};

const loadBook = (key) => {
  return {
    selectedBook: wrapPromise(loadBookAsync(key)),
  };
};

export default loadBook;
