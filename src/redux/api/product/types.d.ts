namespace PRODUCTS {
  type GetProductsResponse = ProductGet[];
  type GetProductsRequest = void;

  type CreateProductsResponse = ProductGet;
  type CreateProductsRequest = ProductCreate;

  type DeleteProductsResponse = void;
  type DeleteProductsRequest = { id: number };
}
