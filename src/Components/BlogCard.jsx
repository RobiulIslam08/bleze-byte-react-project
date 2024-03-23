import React from 'react';
import { Link } from 'react-router-dom';
import placeHolderImage from "../assets/404.jpg"
import { MdDelete } from "react-icons/md";

const BlogCard = ({blog,deletable,handleDelte}) => {
    const {cover_image, title, description, published_at, id}=blog
    console.log(blog)
    return (
        <div className='flex relative'>
        <Link rel="noopener noreferrer" to={`/blog/${id}`} className="  border-2 border-primary hover:border-secondary border-opacity-30 hover:border-opacity-60 transition shadow-xl p-2 rounded-md max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs dark:text-gray-400">{new Date(blog.published_at).toLocaleDateString()}</span>
            <p>{description}</p>
        </div>
    </Link>
 
        {
            deletable && <div onClick={()=>handleDelte(id)} className='p-3 bg-blue-400 -top-1 rounded-full absolute right-5'><MdDelete className='text-secondary' size={20}/></div>
        }
 
        </div>
   
    );
};

export default BlogCard;