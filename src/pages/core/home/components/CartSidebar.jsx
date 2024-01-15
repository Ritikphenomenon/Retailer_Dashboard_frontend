import { Button, Sidebar, Flowbite } from 'flowbite-react';
import { createPortal } from 'react-dom';
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from '../../../../utils/Context';

export const CartSidebar = () => {

    const { isSidebarOpen, setIsSidebarOpen, items } = useGlobalContext()
    console.log("items",items)
    const component = (
        <>
            <section className='fixed right-0 h-screen top-0 bottom-0 flex w-full z-20'>
                <div className='w-1/2  bg-black/30'>

                </div>

                <Sidebar className='w-1/2' aria-label="Default sidebar example">
                    <Sidebar.Items className=' flex'>
                        <h1 className='flex-1 text-3xl font-bold'>Cart</h1>
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <IoClose className='h-5 w-5' />
                        </button>
                    </Sidebar.Items>
                    <Sidebar.Items className=' flex items-center justify-center mt-10'>
                        

                            <ul className="divide-y divide-gray-200 dark:divide-gray-700 w-full">
                                {items.map(item => (
                                    <li className="py-3 sm:py-4" key={item.id}>
                                        <div className="flex  items-center space-x-4">
                                            <div className="shrink-0">
                                                <img
                                                    alt="Neil image"
                                                    height="100"
                                                    src={item.imageLink}
                                                    width="100"
                                                    className="rounded-none"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{item.description.slice(0,20)} ...</p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-600 dark:text-white"> X{item.quantity}</div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">Rs{item.price}</div>
                                        </div>

                                        
                                    </li>
                                ))}
                            </ul>
                    </Sidebar.Items>

                    <Sidebar.Items className='bottom-0 mt-3'>
                        <Flowbite theme={{
                            theme: {
                                button: {
                                    color: {
                                        primary: 'bg-black hover:bg-black/80 text-white',
                                    },
                                },

                            }
                        }}>

                            {items.length === 0 ? <Button className='bg-black w-full' disabled>

                                <span className="pl-3">Pay</span>
                            </Button> : <Button color='primary' className='w-full' type="submit">
                                Pay
                            </Button>}

                        </Flowbite>
                    </Sidebar.Items>
                </Sidebar>
            </section>
        </>
    )


    return isSidebarOpen && createPortal(component, document.body)
}