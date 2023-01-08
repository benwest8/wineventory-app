import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import Category from "./components/Category";
import Item from "./components/Item";
import "./App.css";

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    base('Items')
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setItems(records);
        fetchNextPage();
      });
    base('Categories')
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setCategories(records);
        fetchNextPage();
      });
  }, []);

  return (
    <>
      <h1>WINES BY THE GLASS</h1>
      {categories.map(category => (
        <>
          <Category
            key={category.id}
            display={category.fields.Name}
          />
          {items.map(item => (
            <>
              {(item.fields.Category[0] === category.id) && (
                <Item
                  key={item.id}
                  subtype={item.fields.Subtype}
                  name={item.fields.Name}
                  origin={item.fields.Origin}
                  container={item.fields.Container}
                  volume={item.fields.Volume}
                  price={item.fields.Price}
                />
              )}
            </>
          ))}
        </>
      ))}
      <p>Credit Card Service Fee Applies</p>
    </>
  )
};

export default App;