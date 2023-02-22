import React from "react";
import { SiSaucelabs } from "react-icons/si";
import { BsFillCartCheckFill } from "react-icons/bs";

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
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl">
            {name?.length < 22 ? name : name.slice(0, 22) + ".."}
          </h2>

          <div className=" font-medium">
            <h1>price : {price} $</h1>
          </div>
          <div className="flex justify-start items-center    font-medium">
            <div className="bg-emerald-700 flex justify-start items-center  px-2">
              <h1 className="text-white"> {ratings} </h1>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-white"
                  checked
                />
              </div>
            </div>
            ({ratingsCount})
          </div>

          <div className="card-actions justify-between text-white">
            <button className="btn btn-secondary gap-2">
              Buy Now <SiSaucelabs />
            </button>
            <button className="btn btn-accent gap-2">
              Add to cart<BsFillCartCheckFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
