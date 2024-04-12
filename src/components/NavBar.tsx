import Link from "next/link";
import Image from 'next/image';
import DropDownActions from "@/components/DropDownActions";
import { Quattrocento } from "next/font/google";
import logo from '../../public/logo.png';

const quattrocento = Quattrocento({weight:"400", subsets:["latin"]});

interface NavBarProps {
    active: "agendamento" | "unidades" | "servicos" | "profissionais" | "sobre" | "contato" | "home"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-white-500 border-b-1"

    return (
        <nav className="flex flex-col items-center w-full px-4 py-2 bg-fuchsia-700 border-b-1 border-white">

            <section className="flex flex-row items-center justify-between w-full">
                <Image
                    src={logo}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
                <h1 className={`${quattrocento.className} text-5xl`}>Insane Beauty</h1>
                <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
                </div>
            </section>

            
            <ul className="flex w-full items-center justify-center py-4 gap-16">
                <li className={active == "agendamento" ? classActive: ""}>
                    <Link href="/">Agendamento</Link>
                    <DropDownActions />
                </li>
                <li className={active == "unidades" ? classActive: ""}>
                    <Link href="/">Unidades</Link>
                    <DropDownActions />
                </li>
                <li className={active == "servicos" ? classActive: ""}>
                    <Link href="/">Serviços</Link>
                    <DropDownActions />
                </li>
                <li className={active == "profissionais" ? classActive: ""}>
                    <Link href="/">Profissionais</Link>
                    <DropDownActions />
                </li>
                <li className={active == "sobre" ? classActive: ""}><Link href="/">Sobre Nós</Link></li>
                <li className={active == "contato" ? classActive: ""}><Link href="/">Contato</Link></li>
                <li className={active == "home" ? classActive: ""}><Link href="/">Home</Link></li>
            </ul>
            
        </nav>
    )
}