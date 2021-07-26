import React, { useContext } from "react";
import { CollectionContextClient } from "../../ContextFile/useContextClient";
import ButtonGroup from "../Buttons/ButtonGroupClient";
import FormStyles from "../../Styles/Form.module.css";

const Form = () => {
  const { container, form, input } = FormStyles;
  const [data, , handleChange, , , , handleCalculate, ,] = useContext(
    CollectionContextClient
  );

  return (
    <div className={container}>
      <form className={form}>
        <input
          type="text"
          name="item"
          value={data.item}
          onChange={handleChange}
          required={true}
          placeholder="Nome do Cliente"
          className={input}
          id="item"
        />
         <input
          type="text"
          name="product"
          value={data.product}
          onChange={handleChange}
          required={true}
          placeholder="Qual produto comprou"
          className={input}
        />
        <input
          type="number"
          name="num"
          value={data.num}
          onChange={handleChange}
          required={true}
          placeholder="Quantidade"
          className={input}
        />
        <input
          type="number"
          name="price"
          value={data.price}
          onChange={handleChange}
          onInput={handleCalculate}
          required={true}
          className={input}
          placeholder="Valor"
        />
        <input
          type="number"
          name="totalPrice"
          value={data.totalPrice}
          required={true}
          readOnly={true}
          placeholder="Total"
          className={input}
        />
        <input
          type="text"
          name="timestamp"
          value={data.timestamp}
          required={true}
          placeholder="data e hora"
          readOnly={true}
          className={input}
        />
      </form>
      <ButtonGroup />
    </div>
  );
};

export default Form;
