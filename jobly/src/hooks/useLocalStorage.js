import { useState, useEffect } from "react";

// const useLocalStorage = (name) => {
//     const [storage,setStorage] = useState(null);

    
//     useEffect(() => {
//         if(storage){
//            window.localStorage.setItem(name,storage) 
//         }
//     }, [storage,name])
//     const storeStorage = (item) => {
//         setStorage(item)
//     }
//     console.log(storage)
//     return [storage,storeStorage];
// }
const useLocalStorage = (name) => {
    const [storage, setStorage] = useState(() => {
    const storedItem = window.localStorage.getItem(name);
        try {
            return storedItem ? JSON.parse(storedItem) : null;
        } catch (error) {
        return storedItem;
        }
    });
  
    const storeStorage = (item) => {
        if (typeof item === "object") {
            setStorage(item);
            window.localStorage.setItem(name, JSON.stringify(item));
        } else {
            setStorage(item);
            window.localStorage.setItem(name, item);
        }
    };


    console.log(storage);
    return [storage, storeStorage];
  };

export default useLocalStorage;