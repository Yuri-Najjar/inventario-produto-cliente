import React, { useContext } from "react";
import { CollectionContext } from "../../ContextFile/useContext";
import ButtonGroup from "../Buttons/ButtonGroup";
import FormStyles from "../../Styles/Form.module.css";

const Form = () => {
  const { container, form, input } = FormStyles;
  const [data, , handleChange, , , , handleCalculate, ,] = useContext(
    CollectionContext
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
          placeholder="Nome do Produto"
          className={input}
          id="item"
        />
        <input
          type="number"
          name="num"
          value={data.num}
          onChange={handleChange}
          required={true}
          placeholder="quantidade"
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
          placeholder="preço"
        />
        <input
          type="number"
          name="totalPrice"
          value={data.totalPrice}
          required={true}
          readOnly={true}
          placeholder="Preço Total"
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
