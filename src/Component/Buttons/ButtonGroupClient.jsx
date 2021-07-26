import React, { useContext } from "react";
import { CollectionContextClient } from "../../ContextFile/useContextClient";
import ButtonStyles from "../../Styles/Button.module.css";

const ButtonGroup = () => {
  const { container, buton } = ButtonStyles;
  const [
    ,
    ,
    ,
    handleFormSubmit,
    handleDeleteData,
    handleEditData,
    ,
    handleCache,
  ] = useContext(CollectionContextClient);
  return (
    <div className={container}>
      <button className={buton} onClick={handleFormSubmit}>
        Adicionar
      </button>
      <button className={buton} onClick={handleEditData}>
        Editar
      </button>
      <button className={buton} onClick={handleDeleteData}>
        Deletar
      </button>
      <button className={buton} onClick={handleCache}>
        Limpar
      </button>
    </div>
  );
};

export default ButtonGroup;
