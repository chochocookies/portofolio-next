import { Target } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube,} from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path:"https://github.com/chochocookies?tab=repositories",},
    { icon: <FaLinkedin />, path:"https://www.linkedin.com/in/eko-aryanto-86083b15a/"},
    { icon: <FaInstagram />, path:"https://www.instagram.com/cho_aryant/"},
    { icon: <FaYoutube />, path:"https://www.youtube.com/channel/UCyh8WLZtYpX7auVGl1CLTOg"},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
    );
};

export default Social;