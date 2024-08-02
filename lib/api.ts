

export const fetchAPICAll=async(endpoint:string,method:"GET"|"POST",headers?:any)=>{
   try{
       const url = `${process.env.NEXT_PUBLIC_MOVIE_URL}${endpoint}`;
       const response = await fetch(url,{method:method,headers:{
          accept: 'application/json',
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_READT_ACCESS_TOKEN}`,
        ...headers
       }})
       const responseJson =await response.json();
       return responseJson
   }catch(error){
     return error
   }
}