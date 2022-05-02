// use axios for api call
import axios from "axios";
import { GET_PRODUCTS_DATA, FILTER_PRODUCTS, SORT_PRODUCTS} from "./actionTypes";
const getProductsData=async(dispatch)=> {

    try {
       let res=await axios.get("https://movie-fake-server.herokuapp.com/products") 
       let data=await res.data;

       dispatch({
           type:GET_PRODUCTS_DATA,
           payload:data
       })
    } catch (error) {
        console.log("error")
    }
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
