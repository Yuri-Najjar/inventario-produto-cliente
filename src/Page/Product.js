import React from "react";
import Table from "../Component/Table/Table";
import Form from "../Component/Form/Form";
import productStyles from "../Styles/Product.module.css";

const Product = () => {
  const { container, wrapper, heading, content } = productStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={heading}>
          <h2>Inventário de Produtos</h2>
        </div>
        <div className={content}>
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Product;
