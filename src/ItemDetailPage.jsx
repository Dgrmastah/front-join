const ItemDetailPage = ({item}) => {

  return (
    <>
    <h3>{item.title}</h3>
    <p>cmpleted: {`${item.completed}`}</p>
    </>
 
  );
};

export default ItemDetailPage;
