import { CartSidebar } from './components/CartSidebar'
import { Nav } from "./components/Nav";
import { useGlobalContext } from '../../../utils/Context';

import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { api } from '../../../utils/axios';
import { ProductList } from './components/ProductList';


const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(!isLoading)
                const response = await api.get("/users/products")
                console.log(response)
                setItems(response.data.products)

                setIsLoading(!isLoading)
            } catch (error) {
                console.log(error)
            }
        }

        fetchProducts()

    }, [])


    console.log("items", items)

    return (
        <main className="bg-gray-100 h-screen">
            <Toaster />
            <Nav />
            <section className='h-96 w-full bg-[#010109] relative overflow-hidden'>
                    <img src="https://res.cloudinary.com/duskdho4x/image/upload/v1705306070/pexels-pixabay-277319_up30w0.jpg" alt="banner-image" className='absolute object-contain top-0 bottom-0 left-0 right-0 min-w-full h-full' />
            </section>
            <CartSidebar />

            {
                items.length > 0 ? (
                    <ProductList items={items} />
                ) : (
                    <h1>No items found</h1>
                )
            }


        </main>
    )

}

export default Home