import axios from "axios";
import { api } from "../configs";
import { toast } from "react-toastify";

const api_url = api + "/products";
class ProductService {
  static async CreateProduct(productImages, type, input) {
    type = type.map((type) => type.value);
    console.log(type);

    const data = {
      productImages: productImages,
      product_name: input.name,
      cost: input.cost,
      product_dimensions: input.dimensions,
      product_detail: input.detail,
      category_type_id: type,
    };

    try {
      const response = await axios.post(`${api_url}`, data);
      if (response.data.statusCode === 201) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
  static async getProducts(currentPage, query) {
    try {
      const response = await axios.get(
        `${api_url}?page=${currentPage - 1}&keyword=${query}&limit=10`
      );
      if (response.data.statusCode === 200) {
        return response.data.data;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
  static async deleteProduct(id) {
    try {
      const response = await axios.delete(`${api_url}/${id}`);
      if (response.data.statusCode === 202) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
  static async getProduct(id) {
    try {
      const response = await axios.get(`${api_url}/${id}`);
      if (response.data.statusCode === 200) {
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
  static async updateProduct(product, type) {
    type = type.map((type) => type.value);
    const data = {
      discount: product.discount,
      product_name: product.productName,
      cost: product.cost,
      product_dimensions: product.product_dimensions,
      product_detail: product.product_detail,
      category_type_id: type,
    };
    try {
      const response = await axios.put(`${api_url}/${product.id}`, data);
      if (response.data.statusCode === 202) {
        toast.success(response.data.message);
        return true;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
  static async deleteImage(id) {
    try {
      const response = await axios.delete(`${api_url}/product_image/${id}`);
      if (response.data.statusCode === 202) {
        toast.success(response.data.message);
        return true;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
  static async addImage(id, url_image) {
    const data = [
      {
        product_id: id,
        image_url: url_image,
      },
    ];
    try {
      const response = await axios.put(`${api_url}/image_product/${id}`, data);
      if (response.data.statusCode === 202) {
        toast.success(response.data.message);
        return true;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("ERROR!!");
    }
  }
  static async getNewProducts() {
    try {
      const response = await axios.get(`${api_url}/top_10_new_product`);
      if (response.data.statusCode === 200) {
        return response.data.data;
      }
    } catch (error) {}
  }
  static async getProductsFilter(page, min, max, typeId, query) {
    const params = {
      page: page - 1,
      limit: 10,
      minPrice: min,
      maxPrice: max,
      categoryTypeIds: typeId,
      keyword: query,
    };
    try {
      const response = await axios.get(`${api_url}/filter`, { params });
      if (response.data.statusCode === 200) {
        return response.data.data;
      }
    } catch (error) {}
  }
}
export default ProductService;
