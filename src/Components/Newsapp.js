import { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
    const [search,setSearch]=useState("india");
    const [newsData,setNewsData]=useState(null);
    const API_KEY=process.env.REACT_APP_API_KEY;
    const getData= async()=>{
        

        const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData= await response.json();
        console.log(jsonData);
        setNewsData(jsonData.articles)
    }
    useEffect(()=>{
        getData()
    },[] )


    const handleInput=(e)=>{
        setSearch(e.target.value);
    }
    const userInput =(event)=>
    {
        setSearch(event.target.value)
    }
  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul>
                <a>All News</a>
                <a> Trending</a>
            </ul>
            <div className='searchBar'>
                <input text='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div className='head'>Stay updated with trendy news</div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>
        <div>
            <Card data={newsData}/>
        </div>
    </div>
  )
}

export default Newsapp