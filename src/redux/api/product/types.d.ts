namespace PRODUCTS {
  type GetProductsResponse = ProductGet[];
  type GetProductsRequest = void;

  type CreateProductsResponse = ProductGet;
  type CreateProductsRequest = ProductCreate;

  type DeleteProductsResponse = void;
  type DeleteProductsRequest = number;

  type updateTodoResponse = ProductGet;
  type updateTodoRequest = {
    _id: number;
    data: ProductGet;
  };
}
