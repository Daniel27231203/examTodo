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
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: build.mutation<
      PRODUCTS.DeleteProductsResponse,
      PRODUCTS.DeleteProductsRequest
    >({
      query: (id) => ({
        url: `${url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    updateTodo: build.mutation<
      PRODUCTS.updateTodoResponse,
      PRODUCTS.updateTodoRequest
    >({
      query: ({ _id, data }) => ({
        url: `${url}/${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateTodoMutation,
} = api;
