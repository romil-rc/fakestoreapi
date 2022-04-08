import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(await response.data);
      setLoading(false);
    };
    getProduct();
  }, [id]);
//   console.log(product);

  const Loading = () => {
    return (
        <div className='md:px-36 md:flex h-96'>
            <div className="w-full h-full flex py-5">
                <Skeleton height={400} width={400} />
            </div>
            <div className="w-full p-5 space-y-4" style={{lineHeight: 2}}>
                <Skeleton height={100} />
                <Skeleton height={50} />
                <Skeleton height={25} />
                <Skeleton height={150} />
            </div>
        </div>
    );
};

  return (
    <>
        {
            loading ? 
            <Loading /> : 
            
            <div className="px-16 md:px-36 md:flex h-96">
                <div className="w-full h-full flex justify-center py-5">
                    <img className="h-80 w-80" src={product.image} alt={product.category} />
                </div>
                <div className="w-full text-left p-5 space-y-4">
                    <p className="text-2xl font-semibold">{product.title}</p>
                    <p className="text-3xl font-bold">$ {product.price}</p>
                    <p className="text-rose-600 capitalize inline-block border-2 border-slate-600 rounded-md px-3 bg-slate-100 font-medium">
                    {product.category}
                    </p>
                    <p className="text-justify font-medium">{product.description}</p>
                </div>
            </div>
        
        }
        
    </>
  );
};

export default Product;
