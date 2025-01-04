import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className="text-lg font-semibold text-neutral-400">Resources</h3>
                <ul>
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white ">
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-neutral-400">Platform</h3>
                <ul>
                    {communityLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white ">
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-neutral-400">Community</h3>
                <ul>
                    {platformLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white ">
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </footer>
  )
}

export default Footer