import React, { useState, useEffect } from "react";

const CollectionContextClient = React.createContext([
  {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
]);

const CollectionProvider = (props) => {
 

  let storageData = localStorage.getItem("itemCollection");

  const [data, setData] = useState({
    item: "",
    product: "",
    num: "",
    price: "",
    totalPrice: "",
    timestamp: "",
    keyHolder: null,
    collection: storageData ? JSON.parse(storageData) : [],
  });

  const handleChange = ({ target }) => {
    setData((data) => ({ ...data, [target.name]: target.value }));
  };

  const handleCalculate = ({ target }) => {
    let total = Number(data.num) * Number(target.value);

    return data.num
      ? setData((data) => ({
          ...data,
          totalPrice: total,
          timestamp: new Date().toDateString(),
        }))
      : 0;
  };

  const handleFormSubmit = (e) => {

    const { item, product, num, price, totalPrice, timestamp } = data;
    setData((data) => ({
      ...data,
      collection: [
        ...data.collection,
        { item, product, num, price, totalPrice, timestamp },
      ],
    }));
  };

  const handleEditData = () => {
    const parseStorage = JSON.parse(storageData);
    const { keyHolder, item, product, num, price, totalPrice, timestamp } = data;
    let matchIndex = parseStorage.findIndex((value, i) => i === keyHolder);
    parseStorage.splice(matchIndex, 1, {
      item,
      product,
      num,
      price,
      totalPrice,
      timestamp,
    });

    const jsonState = JSON.stringify(parseStorage);
    localStorage.setItem("itemCollection", jsonState);
    setData((data) => ({ ...data, collection: parseStorage }));
  };

  const handleDeleteData = () => {
    const parseStorage = JSON.parse(storageData);
    const { keyHolder } = data;
    let NotRemoved = parseStorage.filter((value, i) => i !== keyHolder);
    const jsonState = JSON.stringify(NotRemoved);

    setData((data) => ({ ...data, collection: NotRemoved }));
    localStorage.setItem("itemCollection", jsonState);
  };

  const handleCache = () => {
    setData((data) => ({ ...data, collection: [] }));
    return localStorage.setItem("itemCollection", []);
  };

  useEffect(() => {

    const handleLocalStorage = () => {
      const { collection } = data;
      try {
        const jsonState = JSON.stringify(collection);
        localStorage.setItem("itemCollection", jsonState);
      } catch (err) {
        console.error(err);
      }
    };
    handleLocalStorage();
  });

  return (
    <CollectionContextClient.Provider

      value={[
        data,
        setData,
        handleChange,
        handleFormSubmit,
        handleDeleteData,
        handleEditData,
        handleCalculate,
        handleCache,
      ]}
    >
      {props.children}
    </CollectionContextClient.Provider>
  );
};

export { CollectionContextClient, CollectionProvider };
