import { GET_PRODUCTS_DATA ,FILTER_PRODUCTS,SORT_PRODUCTS} from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case GET_PRODUCTS_DATA:
      return{
        data:payload,
        isLoading:false,
        isError:false,
        filterData:[],
        products:[],
      }

      case FILTER_PRODUCTS:
        return{
          data:payload,
          isLoading:false,
          isError:false,
          filterData:[],
          products:[],
        }

        case SORT_PRODUCTS:
          return{
            data:payload,
            isLoading:false,
            isError:false,
            filterData:[],
            products:[],
          }
          default:
            return state
  }
};
export { reducer };
