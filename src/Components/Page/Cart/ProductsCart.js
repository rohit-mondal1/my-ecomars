import React from "react";

const ProductsCart = ({ product }) => {
  const {
    _id,
    category,
    img,
    name,
    price,
    quantity,
    ratings,
    ratingsCount,
    seller,
    shipping,
    stock,
  } = product;

  console.log(product);

  return (
    <div>
      <div className="card card-compact my-4 mx-4 w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name?.length < 22 ? name : name.slice(0 , 22) + '..' }</h2>

          <div className="text-xl font-medium">
            <h1>price : {price} $</h1>
          </div>
          <div className="flex justify-between  text-xl font-medium">
            <h1> {ratings} </h1>
            <h1> {price} </h1>
          </div>
         
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
