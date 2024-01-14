import { CartSidebar } from './components/CartSidebar'
import { Nav } from "./components/Nav";
import { useGlobalContext } from '../../../utils/Context';
import { ProductCard } from './components/ProductCard';


const Home = () => {
    const { isSidebarOpen } = useGlobalContext();

    console.log(isSidebarOpen)
    return (
        <main className="bg-gray-100 h-screen">
            <Nav />
            <CartSidebar />

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 auto-rows-fr mt-6'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>


        </main>
    )

}

export default Home