import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import Menu from "./components/Menu";
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

  // will I need constructor, and this.state to remember stuff?? or is the airtable app handling that, we will find out
  return (
    <Menu
      title="WINES BY THE GLASS"
      categories={ categories }
      items={ items }
      disclosure="Credit Card Service Fee Applies" 
    />
  )
}

export default App;