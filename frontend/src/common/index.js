// const backendDomain="http://localhost:8080"
// const SummaryApi={
//     signUp: {
//         url:`${backendDomain}/api/signup`,
//         method:"post"
//     },
//     signIn:{
//         url:`${backendDomain}/api/signin`,
//         method:"post"
//     },
//     current_user: {
//          url:`${backendDomain}/api/user-details`,
//          method:"get"

//     },
//     logout_user :{
//         url :`${backendDomain}/api/userLogout`,
//         method : 'get'
//     },
//     allUser :
//     {
//         url : `${backendDomain}/api/all-users`,
//         method : 'get'
//     },
//     updateUser :{
//         url : `${backendDomain}/api/update-user`,
//         method : 'post'
//     },
//     uploadProduct : {
//         url :  `${backendDomain}/api/upload-product`,
//         method : "post"
//     },
//     allProduct : {
//         url :  `${backendDomain}/api/get-product`,
//         method : "get"
//     },
//     updateProduct : {
//         url :  `${backendDomain}/api/update-product`,
//         method : "post"  
//     },
//     categoryProduct : {
//         url :  `${backendDomain}/api/get-categoryProduct`,
//         method : "get"   
//     },
//     categoryWiseProduct : {
//         url :  `${backendDomain}/api/category-product`,
//         method : "post"    
//     },
//     productDetails : {
//         url :  `${backendDomain}/api/product-details`,
//         method : "post" 
//     },
//     addToCartProduct : {
//         url :  `${backendDomain}/api/addtocart`,
//         method : "post"   
//     },
//     countAddToCartProduct : {
//         url :  `${backendDomain}/api/countAddToCartProduct`,
//         method : "get"  
//     },
//     addToCartProductView : {
//         url :  `${backendDomain}/api/view-card-product`,
//         method : "get"   
//     }
   
    
// }
// export default SummaryApi

const backendDomin = "http://localhost:8080"
const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${backendDomin}/api/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `${backendDomin}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${backendDomin}/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${backendDomin}/api/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `${backendDomin}/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${backendDomin}/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${backendDomin}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${backendDomin}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${backendDomin}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${backendDomin}/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${backendDomin}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${backendDomin}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${backendDomin}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${backendDomin}/api/filter-product`,
        method : 'post'
    }
}


export default SummaryApi