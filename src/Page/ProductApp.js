import React from "react";
import Product from "./Product";
import { CollectionProvider } from "../ContextFile/useContext";

const ProductApp = () => {
  return (
    
    <CollectionProvider>
    <div className="container">
      <Product />
    </div>
  </CollectionProvider>
  );
};
export default ProductApp;
