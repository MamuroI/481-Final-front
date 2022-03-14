import React, { createContext, useContext, useEffect, useState } from "react";
import { client, getFav, addFav, removeFav, searchTitle, searchIngredient, searchFav } from "../../../api";

export const context = createContext();

export const useController = () => new Controller(useContext(context));

class Controller {
    constructor(context) {
        this.context = context;
    
        this.userId = context.userId;
        this.setUserId = context.setUserId;

        this.searchText = context.searchText;
        this.setSearchText = context.setSearchText;

        this.result = context.result;

        this.favOption = context.favOption
        this.setFavOption = context.setFavOption
    }
    
    handleLogout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.reload(false);
    }

    setResult(data){
        this.context.setResult(data)
    }

    handleSearchTitle(){
        const data = {
            query: this.searchText,
        }
        console.log(data)
        searchTitle(localStorage.getItem('token'),data)
            .then(res => {
                console.log(res)
                this.setResult(res.data)
                this.setFavOption(0)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    handleSearchIngredient(){
        const data = {
            query: this.searchText,
        }
        console.log(data)
        searchIngredient(localStorage.getItem('token'),data)
            .then(res => {
                console.log(res)
                this.setResult(res.data)
                this.setFavOption(0)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    
    handleAddFav(index){
        const data = {
            index: index.toString(),
        }
        console.log(data)
        addFav(localStorage.getItem('token'),data)
            .then(res => {
                console.log(res)
                window.location.reload(false);
            })
            .catch(err =>{
                console.log(err)
            })
    }

    handleRemoveFav(index){
        const data = {
            index: index.toString(),
        }
        console.log(data)
        removeFav(localStorage.getItem('token'),data)
            .then(res => {
                console.log(res)
                window.location.reload(false);
            })
            .catch(err =>{
                console.log(err)
            })
    }

    handleGetFav(){
        getFav(localStorage.getItem('token'))
            .then(res => {
                console.log(res)
                this.setResult(res.data)
                this.setFavOption(1)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    handleSearchFav(){
        const data = {
            query: this.searchText,
        }
        searchFav(localStorage.getItem('token'),data)
            .then(res => {
                console.log(res)
                this.setResult(res.data)
                this.setFavOption(1)
            })
            .catch(err =>{
                console.log(err)
            })
    }

}

export function HomeProvider({ children }) { 
    const [userId, setUserId] = useState(0); 
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState();
    const [favList, setFavList] = useState();
    const [favOption, setFavOption] = useState(0);

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
                searchText,setSearchText,
                favList,setFavList,
                result,setResult,
                favOption,setFavOption
            }}
        >
            {children}
        </context.Provider>
    );
}
