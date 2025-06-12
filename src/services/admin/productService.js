import { getAllProductApi } from "../../api/admin/productApi";

export const getAllProductService= async (params) =>{
    try{

    }catch(err){
        throw err.response?.data || {message:"Product fetch failed"}  
     }
}