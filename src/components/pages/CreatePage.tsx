"use client";
import { FC } from "react";
import scss from "./CreatePage.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateProductMutation } from "@/redux/api/product";
import axios from "axios";

const CreatePage: FC = () => {
  const { reset, handleSubmit, register } = useForm<ProductCreate>();
  const [createProductMutation] = useCreateProductMutation();
  const onSubmit: SubmitHandler<ProductCreate> = async (data) => {
    const Newdata = {
      title: data.title,
      img: data.img,
      description: data.description,
    };
    await axios.post(
      "https://api.elchocrud.pro/api/v1/6240f87516520f284ba023de7569393e/product",
      Newdata
    );
    reset();
    // try {
    //   const { data } = await createProductMutation(Newdata);
    //   console.log("��� ~ CreatePage ~ data:", data);
    //   reset();
    // } catch (e) {
    //   console.error("Error creating product:", e);
    // }
  };

  return (
    <section className={scss.CreatePage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Create a new task</h1>
          <div className={scss.box}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="add title"
                {...register("title", { required: true })}
              />
              <input
                type="text"
                placeholder="add image URL"
                {...register("img", { required: true })}
              />
              <textarea
                {...register("description", { required: true })}
                placeholder="Task description"
              />
              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePage;
