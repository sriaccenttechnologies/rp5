import Product from "./components/Product"
import phone1 from "./assets/ecommerce_images/phone1.jpeg"
import phone2 from "./assets/ecommerce_images/phone2.jpeg"
import phone3 from "./assets/ecommerce_images/phone3.jpeg"

function App() {
  
  const product=[

    {image:phone1,brand:"Sumsung", model:"s1", ram:"2GB", price:20000},
    {image:phone2,brand:"OPPO", model:"O1", ram:"4GB", price:30000},
    {image:phone3,brand:"Apple", model:"A1", ram:"8GB", price:10000},
    
  ]
  
  return (
    <>
      { product.map(  (value)=> <Product  image={value.image} brand={value.brand} model={value.model} ram={value.ram} price={value.price}    />  ) }
    </>
  )
}

export default App




