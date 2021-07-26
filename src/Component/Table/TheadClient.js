import React, { useContext } from "react";
import { CollectionContextClient } from "../../ContextFile/useContextClient";
import TheadStyles from "../../Styles/TableHead.module.css";

const Thead = () => {
  const { thead, row, col } = TheadStyles;
  const [data] = useContext(CollectionContextClient);
  const { collection } = data;
  const headingArr = ["Cliente", "Produto", "Quantidade", "Valor", "Total", "Registro"];
  return (
    <thead className={thead}>
      <tr className={row}>
        {collection &&
          headingArr.map((keys, index) => (
            <th key={index} className={col}>
              {keys}
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default Thead;
