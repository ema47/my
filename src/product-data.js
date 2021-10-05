import axios from "axios"

let products=[]

//const URL =`${process.env.REACT_APP_URL_API}/Productos`
//const URL ="https://609f10645f32be00171cd350.mockapi.io/product"
const URL = "http://192.168.1.10:8000/product"

const obtenerProductos = async () =>{
    try {
        let data =await axios.get(URL)
        console.log(data.data[0])
        for(let i=0;i<data.data.length;i++)
        {
            products.push(data.data[i])
        }
        //products.push()
        //console.log(data.data.length)
        return data

    } catch (error) {
        throw error
    }
}




    try {
        
        obtenerProductos()    
        
    } catch (error) {
        console.log(error)
    }


  

// const products  = [

//     {
//         id:1,
//         name:"Shoes",
//         productType: "Running shoes",
//         price: 50,
//         rating: 4,
//         image:
//         "https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg",
//         description:
//          "nike air is our iconic innovation",
//     },
//     {
//         id:2,
//         name:"Macbook",
//         productType: "Apple Mcbook",
//         price: 1000,
//         rating: 4,
//         image:
//         "https://i.blogs.es/67b0e2/analisis-macbook-pro-13-2020-applesfera-06/1024_2000.jpg",
//         description: 
//         "Mackbok is amazing asasdas asdasd enfoenfknskmd sdnaodn",
//     },
//     {
//         id:3,
//         name:"Cofee Maker",
//         productType: "L14dc19 Black Filter Cofee Machine",
//         price:28,
//         rating: 3,
//         image:
//         "https://brain-images-ssl.cdn.dixons.com/4/9/10189494/u_10189494.jpg",
//         description: 
//         "cofeeeeasdasd sadasdas d asdas d as das d",
//     },
//     {
//         id:4,
//         name:"Sweater",
//         productType: "xbox Chrismas Sweater",
//         price: 42,
//         rating: 5,
//         image:
//         "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/x/b/xbox-jumper.jpg",
//         description: 
//         "Pc or MAc asdasd as das fas f sa foqngfo ",
//     },
    
// ];
export default products;