"use client";
import { FC } from "react";
import scss from "./CreatePage.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateTodoMutation,
} from "@/redux/api/product";
import { useParams, useRouter } from "next/navigation";
import { useUploadMutation } from "@/redux/api/upload";

const CreatePage: FC = () => {
  const { reset, handleSubmit, register } = useForm<ProductCreate>();
  const [createProductMutation] = useCreateProductMutation();
  const [UpdateTodoMutation] = useUpdateTodoMutation();
  const { data } = useGetProductsQuery();
  const { id } = useParams();
  const product = data?.find((el) => el._id === Number(id));
  const router = useRouter();
  const [uploadMutation] = useUploadMutation();

  const onSubmit: SubmitHandler<ProductCreate> = async (data) => {
    try {
      const file = data.files?.[0];
      if (!file) throw new Error("File is required");

      const formData = new FormData();
      formData.append("file", file);

      const { data: upfile } = await uploadMutation(formData);
      const newData = { title: data.title, img: upfile?.url };
      await createProductMutation(newData).unwrap();
      reset();
      router.push("/");
    } catch (e) {
      console.error("Error creating product:", e);
    }
  };

  const Update: SubmitHandler<ProductCreate> = async (data) => {
    const editPro = {
      title: data.title,
      img: data.img,
    };
    try {
      const response = await UpdateTodoMutation({
        data: editPro,
        _id: Number(id),
      });
      reset();
      router.push("/");
    } catch (err) {
      console.error("Error editing product:", err);
    }
  };

  return (
    <section className={scss.CreatePage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Create a new task</h1>
          <div className={scss.box}>
            <form
              onSubmit={
                !product ? handleSubmit(onSubmit) : handleSubmit(Update)
              }
            >
              <input
                type="text"
                placeholder="Add title"
                {...register("title", { required: true })}
                defaultValue={product?.title}
              />
              {!product ? (
                <input
                  type="file"
                  placeholder="Add image URL"
                  {...register("files", {
                    required: true,
                  })}
                />
              ) : (
                <input
                  type="text"
                  placeholder="Add image URL"
                  {...register("img", {
                    required: true,
                  })}
                  defaultValue={product?.img}
                />
              )}
              {!product ? (
                <button type="submit">Create</button>
              ) : (
                <button type="submit">Save</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
