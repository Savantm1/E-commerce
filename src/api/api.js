import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7000/api/",
  })

  export const API = {

     async getCategories(){
        return await instance.get(`/categories`).then(response =>{

          return response.data;
          })
      },

     async getCategoryProducts(categoryId,bestSelling = false,bestFromFarmers = false,limit,page){
       console.log('params',categoryId,page)
       return await instance.get(`/products?categoryId=${categoryId}&bestSelling=${bestSelling}&bestFromFarmers=${bestFromFarmers}&page=${page}`).then(response =>{

          return response.data;
          })
      },

     async getFeedback(){
          return await instance.get(`feedback`).then(response => {
            return response.data;
          })
      },
     async getProducts(limit = 10,bestFromFarmers=false,bestSelling=false,page=1){

          return await instance.get(`products?limit=${limit}&bestFromFarmers=${bestFromFarmers}&bestSelling=${bestSelling}&page=${page}`).then(response => {
            return response.data;
          })
      },
     async getProduct(productId){
          return await instance.get(`products/${productId}`).then(response => {
            return response.data;
          })
      },

      async getBlogs(){
        
        return await instance.get(`blog`).then(response => {

          return response.data;
        })
      },

      async getBlogItem(item){
        
        return await instance.get(`blog/${item}`).then(response => {
          debugger
          return response.data;
        })
      },

      async AddComment(data){
        return await instance.post(`comments`,data).then(response => {
          return(response.status)
        })
      }
      
  }

  export default API;