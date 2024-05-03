import Form from "./Components/Form";
import Header from "./Components/Header";
import React, { useReducer } from "react";
import SearchBar from "./omponents/SearchBar";
import Table from "./Components/Table";
import "./index.css";

const initialState = {
  transactions: [],
  searchTerm: "",
  filterCategory: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "UPDATE_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "UPDATE_FILTER_CATEGORY":
      return {
        ...state,
        filterCategory: action.payload,
      };
    default:
      return state;
  }
}
