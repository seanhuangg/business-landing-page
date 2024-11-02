import { features } from "../constants"

const Features = () => {
    return (
        <div id="features" className="text-slate-300 relative mt-20 border-b -border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-blue-400 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Our Features
                </span>

                <h2 className="text-3xl sm:text-5xl lg:txt-6xl mt-10 lg:mt-20 tracking-wide">
                    Accelerate Your {' '}
                    <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text"> Business </span>
                </h2>
            </div>

            <div className="text-slate-400 flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-300 justify-center items-center rounded-full">
                                {feature.icon}
                            </div>

                            <div>
                                <h5 className="mt-1 mb-6 text-xl">
                                    {feature.text}
                                </h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">
                                    {feature.description}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Features