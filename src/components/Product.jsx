import "../components/Product.css"

const Product = (props) => {
  return (
    <>
    <div className="product">
        <img src={props.image} alt="" width="200" height="200" />
        <p>Brand:{props.brand}</p>
        <p>Model:{props.model}</p>
        <p>RAM:{props.ram}</p>
        <p>Rs:{props.price}</p>
    </div>    
    </>
  )
}

export default Product