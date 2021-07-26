import React, { useContext } from "react";
import { CollectionContextClient } from "../../ContextFile/useContextClient";
import TbodyStyles from "../../Styles/Tbody.module.css";

const Tbody = () => {
  const { tbody, row, col } = TbodyStyles;
  const [data, setData] = useContext(CollectionContextClient); 

  const handleGetId = ({ index, values }) => {
    const { item, product, num, price, totalPrice } = values;
    setData((data) => ({
      ...data,
      item,
      product,
      num,
      price,
      totalPrice,
      keyHolder: index,
    }));
  };

  const { collection } = data;
  return (
    <tbody className={tbody}>
      {collection &&
        collection.map((values, index) => (
          <tr
            key={index}
            onClick={() => handleGetId({ index, values })}
            className={row}
          >
            <td className={col}>{values.item}</td>
            <td className={col}>{values.product}</td>
            <td className={col}>{values.num}</td>
            <td className={col}>{values.price}</td>
            <td className={col}>{values.totalPrice}</td>
            <td className={col}>{new Date().toDateString()}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default Tbody;
