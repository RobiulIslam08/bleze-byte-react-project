import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Components/Utils";
import BlogCard from "../Components/BlogCard";


const Bookmarkss = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])
    function handleDelte(id){
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }
    if(blogs.length <1)   return <h1>kichu nai bro</h1>
      
    
    return (
        <div className="grid py-3 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
            blogs.slice(1,19).map(blog => <BlogCard handleDelte={handleDelte} deletable= {true} key={blog.id} blog={blog}></BlogCard>)
        }
        
    </div> 
    );
};

export default Bookmarkss;