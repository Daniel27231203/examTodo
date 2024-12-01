import { api as index } from "..";

const url = `/6240f87516520f284ba023de7569393e/product`;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<
      PRODUCTS.GetProductsResponse,
      PRODUCTS.GetProductsRequest
    >({
      query: () => ({
        url: url,
      }),
      providesTags: ["product"],
    }),
    createProduct: build.mutation<
      PRODUCTS.CreateProductsResponse,
      PRODUCTS.CreateProductsRequest
    >({
      query: (body) => ({
        url: url,
        methods: "POST",
        body: body,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, useCreateProductMutation } = api;
