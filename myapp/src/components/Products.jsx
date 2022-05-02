import React, { useEffect,useState } from "react";
import { Select } from "./Styled";
import { Grid } from "./Styled";
import { ProductCard } from "./ProductCard";
import {useSelector,useDispatch} from "react-redux";
import { getProductsData } from "../Redux/actions";
import styled from "styled-components";
export const Products = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.data)
  console.log(data)
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
  getProductsData(dispatch)
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {data.map((item)=>(
          <ProductCard item={item} key={item.id}/>
        ))}
      </Grid>
    </>
  );
};
