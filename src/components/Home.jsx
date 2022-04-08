import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await axios.get(`https://fakestoreapi.com/products`);
            setProducts(await response.data);
            setLoading(false);
        }
        getProducts();
    }, []);
    // console.log(products);
    
    const Loading = () => {
        return (
            <div className="col-md-3">
                <TailSpin
                    height="100"
                    width="100"
                    color='black'
                    ariaLabel='loading'
                />
            </div>
        );
      };

    return (
    <>
        {
            loading ?

            <div className='flex justify-center'>
                <Loading />
            </div>  : 
            
            <div className='grid grid-cols-1 gap-y-8 p-5 md:grid-cols-3 md:p-20 md:gap-x-24 md:gap-y-8'>
            {products.map((product)=> {
                return(
                    <div className='border rounded-xl shadow-lg' key={product.id}>
                        <div className='py-10 px-20 h-60'>
                            <img className='h-full w-full' src={product.image} alt={product.title} />
                        </div>
                        <div className='p-5 border-t space-y-1 text-left'>
                            <p className='truncate font-semibold text-xl'>{product.title}</p>
                            <p className='font-bold text-2xl'>$ {product.price}</p>
                            <div className='flex justify-between'>
                                <p className='capitalize text-slate-500'>{product.category}</p>
                                <NavLink to={`/${product.id}`} className="outline outline-offset-2 outline-1 rounded px-1 cursor-pointer hover:scale-105 transition-transform">See More</NavLink>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>   
        }
    </>
    )
}

export default Home;