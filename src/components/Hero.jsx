// import video1 from "../assets/video1.mp4"
// import video2 from "../assets/video2.mp4"
import vid1 from "../assets/vid1.mp4"
import vid2 from "../assets/vid2.mp4"

const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 xl:mt-20">
            <h1 className="text-slate-300 font-medium text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Your Brand&apos;s Services
                <br />
                <span className="bg-gradient-to-r from-green-500 to-green-800  text-transparent bg-clip-text">
                    {" "}
                    for clients
                </span>
            </h1>

            <p className="font-light mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Unleash your brand&apos;s potential and captivate your audience with this fully responsive landing page template.
                Bring your creative vision to life and give your company the spotlight it deserves!
            </p>

            <div className="flex justify-center my-10">
                <a href="#" className="font-light bg-gradient-to-r from-slate-500 to-blue-600 py-3 px-4 mx-3 rounded-md">
                    Get Started
                </a>

                <a href="#" className="border-slate-400 text-slate-300 font-light py-3 px-4 mx-3 rounded-md border">
                    Documentation
                </a>
            </div>

            <div className="flex mt-10 justify-center">
                <video style={{ filter: "brightness(0.8) contrast(1.2) saturate(1.5)" }} autoPlay loop muted className="rounded-lg w-1/2 border border-green-800 shadow-green-600 mx-2 my-4">
                    <source src={vid1} type="video/mp4" />
                    Your browser does not support this video format.
                </video>
                <video style={{ filter: "brightness(0.8) contrast(1.2) saturate(1.5)" }} autoPlay loop muted className="rounded-lg w-1/2 border border-green-800 shadow-green-600 mx-2 my-4">
                    <source src={vid2} type="video/mp4" />
                    Your browser does not support this video format.
                </video>
            </div>

        </div>
    )
}

export default Hero