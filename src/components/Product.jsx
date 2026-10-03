import "../components/Product.css"
import phone1 from "../assets/ecommerce_images/phone1.jpeg"
import phone2 from "../assets/ecommerce_images/phone2.jpeg"
import phone3 from "../assets/ecommerce_images/phone3.jpeg"

const Product = () => {
  
  const product=[
    {image:phone1,brand:"Sumsung", model:"s1", ram:"2GB", price:20000},
    {image:phone2,brand:"OPPO", model:"O1", ram:"4GB", price:30000},
    {image:phone3,brand:"Apple", model:"A1", ram:"8GB", price:10000},  
  ]
  
  //const sortedProduct=product.sort( (a,b)=>a.brand.localeCompare(b.brand) )

  //const sortedProduct=product.sort( (a,b)=>a.price - b.price )

  const FilterProduct=product.filter(  (value)=>value.price>5000  ).sort( (a,b)=>a.brand.localeCompare(b.brand) )

    
  return (
    <>
                       
      {FilterProduct.map(  (value)=><div className="product">
        <img src={value.image} alt="" width="200" height="200" />
        <p>{value.brand}</p>
        <p>{value.model}</p>
        <p>{value.ram}</p>
        <p>{value.price}</p>
      </div>  ) }
    </>
  )
}

export default Product