"use client";
import { useGetProductsQuery } from "@/redux/api/product";
import React from "react";
import scss from "./HomePage.module.scss";
const HomePage = () => {
  const { data } = useGetProductsQuery();
  console.log("🚀 ~ HomePage ~ data:", data);
  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => (
            <div key={el.id} className={scss.card}>
              <img src={el.img} alt={el.title} />
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
