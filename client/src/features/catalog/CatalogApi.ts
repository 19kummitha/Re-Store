import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import { filterEmptyValues } from "../../lib/util";
import { Product } from "../../app/Models/Product";
import { Pagination } from "../../app/Models/Pagination";
import { ProductParams } from "../../app/Models/ProductParams";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    fetchProducts: builder.query<
      { items: Product[]; pagination: Pagination },
      ProductParams
    >({
      query: (productParams) => {
        return {
          url: "products",
          params: filterEmptyValues(productParams),
        };
      },
      transformResponse: (items: Product[], meta) => {
        const paginationHeader = meta?.response?.headers.get("Pagination");
        const pagination = paginationHeader
          ? JSON.parse(paginationHeader)
          : null;
        return { items, pagination };
      },
    }),
    fetchProductDetails: builder.query<Product, number>({
      query: (productId) => `products/${productId}`,
    }),
    fetchFilters: builder.query<{ brands: string[]; types: string[] }, void>({
      query: () => "products/filters",
    }),
  }),
});

export const {
  useFetchProductDetailsQuery,
  useFetchProductsQuery,
  useFetchFiltersQuery,
} = catalogApi;
