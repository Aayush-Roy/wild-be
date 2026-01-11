import axios from "axios";
import { Product } from "../types/product";

interface ProductResponse {
  products: Product[];
  page: number;
  pages: number;
  total: number;
}

export const fetchProducts = async (): Promise<ProductResponse> => {
  const res = await axios.get<ProductResponse>(
    "http://localhost:5000/api/products"
  );
  return res.data;
};
