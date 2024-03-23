import Hero from "../Components/Hero";
import wave from "../assets/wave.svg"


const Home = () => {
    return (
        <div className="relative min-h-[calc(503px)] flex flex-col justify-center items-center">
           
        
            <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;