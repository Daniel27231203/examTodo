"use client";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/api/product";
import React from "react";
import scss from "./HomePage.module.scss";
import { MdDelete } from "react-icons/md";

const HomePage = () => {
  const { data } = useGetProductsQuery();
  const [Delete] = useDeleteProductMutation();
  console.log("🚀 ~ HomePage ~ data:", data);
  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => (
            <div key={el._id} className={scss.card}>
              <img src={el.img} alt={el.title} />
              <h2>{el.title}</h2>
              <p>{el.description}</p>
              <button
                onClick={() => {
                  Delete(el._id);
                }}
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
