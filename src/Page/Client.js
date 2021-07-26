import React from "react";
import Table from "../Component/Table/TableClient";
import Form from "../Component/Form/FormClient";
import clientStyles from "../Styles/Product.module.css";

const Client = () => {
  const { container, wrapper, heading, content } = clientStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={heading}>
          <h2>Cadastro de Clientes</h2>
        </div>
        <div className={content}>
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Client;
