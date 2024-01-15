// import { CartSidebar } from './components/CartSidebar'
// import { Nav } from "./components/Nav";
// import { useGlobalContext } from '../../../utils/Context';
// import { ProductCard } from './components/ProductCard';
// import { Toaster } from 'react-hot-toast';
// import { useEffect, useState } from 'react';
// import { api } from '../../../utils/axios';


// const Home = () => {

//     const { isSidebarOpen } = useGlobalContext();
//     const [data, setData] = useState([])
//     const [isLoading, setIsLoading] = useState(false)

//     console.log(isSidebarOpen)

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 setIsLoading(!isLoading)
//                 const response = await api.get("/users/products")
               
//                 setData(response.data)

//                 setIsLoading(!isLoading)
//             } catch (error) {
//                 console.log(error)
//             }
//         }

//         fetchProducts()
        
//     },[])

    
//     console.log(data)

//     return (

//         <main className="bg-gray-100 h-screen">

//             <Toaster/>

//             <Nav />

//             <CartSidebar />

//             <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 auto-rows-fr mt-6'>

//                 <ProductCard />
//                 <ProductCard />
               

//             </div>


//         </main>
//     )

// }


// export default Home

import { CartSidebar } from './components/CartSidebar'
import { Nav } from "./components/Nav";
import { useGlobalContext } from '../../../utils/Context';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { api } from '../../../utils/axios';

const Home = () => {
    const { isSidebarOpen } = useGlobalContext();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await api.get("/users/products");
                setData(response.data.products); // Assuming response.data contains 'products' key
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main className="bg-gray-100 h-screen">
            <Toaster/>
            <Nav />
            <CartSidebar />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 auto-rows-fr mt-6'>
                {data.map(product => (
                    <div key={product._id} className="bg-white p-4 rounded-md shadow-md">
                        <img src={product.imageLink} alt={product.title} className="w-full h-32 object-cover mb-4 rounded-md" />
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-lg font-bold text-blue-600">${product.price}</p>
                        <p>{product.published ? 'Published' : 'Not Published'}</p>
                        <p>ID: {product.Id}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Home;
