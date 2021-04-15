import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://api.forsti.local:5000/api/",
  })

  export const API = {

     async getMainPageData(){
        return await instance.get(`categories`).then(response =>{
          return response.data

          })
      }

    //   getCategoryData(){
    //       return instance.get(`categories`).then(response => response)
    //   },

    //   getPorductData(){
    //       return instance.get(`categories`).then(response =>response)
    //   }
  }