import { useContext, createContext, useState } from "react";


export const AppContext = createContext();



// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [items, setItems] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []);

    const handleAddItem = (item) => {
        setItems([...items, item]);
        localStorage.setItem('items', JSON.stringify([...items, item]));
    }

    const handleRemoveItem = (id) => {
        setItems(items.filter(item => item.id !== id));
        localStorage.setItem('items', JSON.stringify(items.filter(item => item.id !== id)));
    }


    return (
        <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, handleAddItem, handleRemoveItem, items }}>
            {children}
        </AppContext.Provider>
    )
}



// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
    return useContext(AppContext);
}






