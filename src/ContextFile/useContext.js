import React, { useState, useEffect } from "react";

const CollectionContext = React.createContext([
  {},
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

    const { item, num, price, totalPrice, timestamp } = data;
    setData((data) => ({
      ...data,
      collection: [
        ...data.collection,
        { item, num, price, totalPrice, timestamp },
      ],
    }));
  };

  const handleEditData = () => {
    const parseStorage = JSON.parse(storageData);
    const { keyHolder, item, num, price, totalPrice, timestamp } = data;
    let matchIndex = parseStorage.findIndex((value, i) => i === keyHolder);
    parseStorage.splice(matchIndex, 1, {
      item,
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
    <CollectionContext.Provider

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
    </CollectionContext.Provider>
  );
};

export { CollectionContext, CollectionProvider };
