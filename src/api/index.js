import axios from "axios";

export const URL = 'http://localhost:5000'

export const client = axios.create({
    baseURL: URL,
})


const getFav = (token) => {
    return client.get(`/getFav`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

const addFav = (token, data) => {
    return client.post(`/addFav`,
        {
            "recipeIndex": data.index
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    );
    
}

const removeFav = (token, index) => {
    return client.post(`/removeFav`,
        {
            "recipeIndex": index
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    );
    
}

const searchTitle = (token, data) => {
    return client.post(`/searchTitle`,
    {
        "query": data.query
    }, 
    {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
}

const searchIngredient = (token, data) => {
    return client.post(`/searchIngredient`,
    {
        "query": data.query
    }, 
    {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
}

export {getFav, addFav, removeFav, searchTitle, searchIngredient};