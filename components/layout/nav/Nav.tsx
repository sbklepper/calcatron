import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    return (
        <nav>
            <div className="nav-logo">
                <Link href="/">
                    <a>
                        Calcatron
                    </a>
                </Link>
            </div>
            <div className="nav-links">
               <Image src="/images/robot.png" alt="Calcatron robot" height={30} width={30} />
            </div>
        </nav>
    )
}