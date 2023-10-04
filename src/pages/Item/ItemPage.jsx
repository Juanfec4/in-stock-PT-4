import { useParams } from "react-router-dom";

const ItemPage = () => {
  const params = useParams();
  const itemId = params?.id ? params.id : " ";
  return <h1>Item {itemId} page</h1>;
};

export default ItemPage;
