import { resourcesLinks, communityLinks, contactInfo } from "../constants"

const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {/* resource section */}
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* community section */}
                <div>
                    <h3 className="text-md font-semibold mb-4">
                        Community
                    </h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* contact section */}
                <ul className="space-y-2 text-right">
                    <h3 className="text-slate-300">
                        Want this template? Contact Me Below:
                    </h3>
                    {contactInfo.map((item, index) => (
                        <li key={index}>
                            <a className="text-slate-500 hover:underline" href={item.href}>
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </footer>
    )
}

export default Footer