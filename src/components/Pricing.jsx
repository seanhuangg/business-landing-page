import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
    return (
        <div id="pricing" className="text-slate-300 mt-20">
            <h2 className="text-3xl sm:text-5xl lg:6xl text-center my-8 tracking-wider">
                Our Pricing
            </h2>

            <div className="flex flex-wrap">
                {pricingOptions.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">
                                {item.title}
                                {item.title === "Pro" &&
                                    <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                        (Most Popular)
                                    </span>}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">
                                    {item.price}
                                </span>
                                <span className="text-purple-500 tracking-tight">
                                    / Month
                                </span>
                            </p>

                            <ul>
                                {item.features.map((feature, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        <CheckCircle2 />
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-700 border border-purple-400 rounded-lg transition duration-200">
                                Choose Plan
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing