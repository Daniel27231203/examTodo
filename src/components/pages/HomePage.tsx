"use client";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/api/product";
import React from "react";
import scss from "./HomePage.module.scss";
import { MdDelete } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { data } = useGetProductsQuery();
  const [deleteMutation] = useDeleteProductMutation();
  const router = useRouter();
  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => (
            <div key={el._id} className={scss.card}>
              <img src={el.img} alt={el.title} />
              <h2>{el.title}</h2>
              <button onClick={() => deleteMutation(el._id)}>
                <MdDelete />
              </button>
              <button
                onClick={() => {
                  router.push(`/update/${el._id}`);
                }}
              >
                <IoPencil />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
