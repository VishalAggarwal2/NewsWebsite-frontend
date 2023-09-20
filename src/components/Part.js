import React from 'react'
import { useState,useEffect } from 'react'
import NewsComp from './NewsComp';

export default function Part({cat,search}) {
     const[News,SetNews]= useState([]);
     const[page,SetPage]= useState(1);
     const[Total,setTotal]= useState(0);
    const get=async()=>{
        
        
        var url = cat===``?`https://newsapi.org/v2/everything?q=education&from=2023-08-20&sortBy=publishedAt&apiKey=3972c771bd884a2287e545fc86dfa39c`:`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=3972c771bd884a2287e545fc86dfa39c&page=${page}&pagesize=15`;
        console.log(url);
        let data = await fetch(url);
        let prsdata=  await data.json(); 
        console.log(prsdata)
        console.log( prsdata.articles);
         setTotal(prsdata.totalResults);
         console.log(Total)
          SetNews(prsdata.articles)   ;
        
       
       
    }
   useEffect(()=>{
    get();
  

    
   },[cat,page])

  
  
  const filteredNews = search===``? News: News.filter((ele) =>
    ele.title.toLowerCase().includes(search.toLowerCase())
  )

 
      
   console.log(search);
  return (<>
    <div className='main'>
         
    {  filteredNews.map((ele)=>{
         return <>
       {  ele.description!=null?<NewsComp img={ele.urlToImage} title={ele.title} dsc={ele.description} author={ele.author} url={ele.url} ></NewsComp>:''}
         </>
      })}
   
    </div>
   { cat===``?'':(<div className="navbtn">
        <button onClick={()=>{

            console.log("clicked");
            if(page==1){alert("No News Below This")}
            else{SetPage(page-1)}
            }} >Prev</button>
        <button onClick={()=>{
            if(Math.ceil(Total/15)>page){ console.log("clicked");
            SetPage(page+1)}
           else{
            alert("No News Ahead")
           }
        }
           }>Next</button>
      </div>)}
    </>
  )
}
