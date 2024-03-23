import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero -mt-20">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Welcome to <span className=" bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to undrstand it{" "}
          </p>

         <div className="flex gap-2 items-center justify-center">
         <Link
            to="/blogs"
            className="  px-5 py-2 relative rounded group overflow-hidden font-medium bg-purple-200 text-black inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600  group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Read Blogs</span>
          </Link>
          <Link
            to="/blogs"
            className=" border-3 px-5 py-2 relative rounded group overflow-hidden font-medium bg-purple-200 text-black inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Bookmarks</span>
          </Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
