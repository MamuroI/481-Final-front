import React, { createContext, useContext, useEffect, useState } from "react";
import { client, getStock, getInfo, buyCoin, sellCoin } from "../../../api";

export const context = createContext();

export const useController = () => new Controller(useContext(context));

class Controller {
    constructor(context) {
        this.context = context;
    
        this.userId = context.userId;
        this.setUserId = context.setUserId;

    }
    
    handleLogout() {
        localStorage.removeItem("user");
        window.location.reload(false);
    }

}

export function HomeProvider({ children }) { 
    const [userId, setUserId] = useState(0); 

    // useEffect(() => {
    //     getInfo(
    //         localStorage.getItem("token"),
    //         JSON.parse(localStorage.getItem("user")).id
    //     ).then((res) => {
    //         console.log("res from getinfo", res);
    //         setUserId(res.data.member.id);
    //     });
    // });

    return (
        <context.Provider
            value={{
                userId,
                setUserId,   
            }}
        >
            {children}
        </context.Provider>
    );
}
