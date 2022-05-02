 import { Flex } from "./Styled";
 import { useParams } from "react-router-dom";

export const ProductCard = ({ item }) => {
  const param=useParams()
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        <h3>{item.title}</h3>
        <img src={item.image} alt=""></img>
        <h4>{item.brand}</h4>
        <p>price:{item.price}</p>
      </Flex>
    </>
  );
};
