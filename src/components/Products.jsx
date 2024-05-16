function Products({products}){
    return(
      <div className="productsCard">
        <img src={products.image} alt="" width='200' height='200' />
        <h2>Title: {products.title}</h2>
        <p>Description: {products.description}</p>
        <p>Price: {products.price}</p>
      </div>
    )
  }

export { Products }