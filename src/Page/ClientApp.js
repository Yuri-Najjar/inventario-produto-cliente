import React from "react";
import Client from "./Client";
import { CollectionProvider } from "../ContextFile/useContextClient";

const ClientApp = () => {
  return (
    
    <CollectionProvider>
    <div className="container">
      <Client />
    </div>
  </CollectionProvider>
  );
};
export default ClientApp;
