import { useContext, createContext, useState, useCallback, useEffect } from "react";


export const AppContext = createContext();



// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(()=>{
        console.log('contxt',localStorage.getItem('cart'))
    },[])

    const [items, setItems] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

    const handleAddItem = (item) => {
        setItems([...items, item]);
        localStorage.setItem('cart', JSON.stringify([...items, item]));
    }

    const handleRemoveItem = (id) => {
        setItems(items.filter(item => item.id !== id));
        localStorage.setItem('cart', JSON.stringify(items.filter(item => item.id !== id)));
    }

    const handleUpdateItem = (id, quantity) => {
        setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
        localStorage.setItem('cart', JSON.stringify(items.map(item => item.id === id ? { ...item, quantity } : item)));
    }


    return (
        <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, handleAddItem, handleRemoveItem, handleUpdateItem, items }}>
            {children}
        </AppContext.Provider>
    )
}



export const useGlobalContext = () => {
    return useContext(AppContext);
}






