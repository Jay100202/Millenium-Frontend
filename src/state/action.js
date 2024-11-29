import { type } from "@testing-library/user-event/dist/type"

export const storeContent = (payload)=>{
    return({
        type:'STORE_CONTENT',
        payload,
    })
}


export const storeNews=(payload)=>{
    return({
        type:'STORE_NEWS',
        payload,
    })
}

export const storeBlogs=(payload)=>{
    return({
        type:'STORE_BLOGS',
        payload,
    })
}