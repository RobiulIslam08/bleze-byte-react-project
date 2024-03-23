
import { useLoaderData } from 'react-router-dom';
import placeHolderImage from "../assets/404.jpg";
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const blog = useLoaderData()
    const {cover_image, title, description, published_at,tags, body_html}=blog
    return (
        <div rel="noopener noreferrer" className="  border-2 border-primary border-opacity-30  transition shadow-xl  p-2 rounded-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-400">
          {
            tags.map(tag =>   <a 
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
            #{tag}
            </a>)
          }
          
        </div>
        <div>
            <h1 className="  text-2xl">
               {title}
          </h1>
      
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
    </div>
    );
};

export default Content;