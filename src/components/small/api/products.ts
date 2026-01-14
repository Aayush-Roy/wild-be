// import axios from "axios";
// import { Product } from "../types/product";

// interface ProductResponse {
//   products: Product[];
//   page: number;
//   pages: number;
//   total: number;
// }

// export const fetchProducts = async (): Promise<ProductResponse> => {
//   // const res = await axios.get<ProductResponse>(
//   //   "http://localhost:5000/api/products"
//   // );
//   const res = fetch("http://localhost:5000/api/products");
//   return res.data;
// };

// import { Product } from "../types/product";

// interface ProductResponse {
//   products: Product[];
//   page: number;
//   pages: number;
//   total: number;
// }

// export const fetchProducts = async (): Promise<ProductResponse> => {
//   const res = await fetch("http://localhost:5000/api/products");
//   console.log(res)
//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const data: ProductResponse = await res.json();
//   return data;
// };
import { Product } from "../types/product";

interface ProductResponse {
  success: boolean;
  count: number;
  data: Product[];
  message?: string;
}

export const fetchProducts = async (): Promise<ProductResponse> => {
  try {
    const res = await fetch("http://localhost:5000/api/products");
    console.log("API Response:", res);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: ProductResponse = await res.json();
    console.log("API Data:", data);
    
    if (!data.success) {
      throw new Error(data.message || "Failed to fetch products");
    }

    return data;
  } catch (error) {
    console.error("Error in fetchProducts:", error);
    throw error;
  }
};