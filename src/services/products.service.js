import { oneProduct } from "../mock/FakeApi";

const getOneProduct = new Promise((resolve) => {
  setTimeout(() => {
    resolve(oneProduct);
  }, 2000);
});

export default getOneProduct;