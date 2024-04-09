import Link from "next/link";

interface NavBarProps {
    active: "agendamento" | "unidades" | "servicos" | "profissionais" | "sobre nos" | "contato" | "home"
}

export default function NavBar(props: NavBarProps){
    const { active } = props
    const classActive = "border-white-500 border-b-4 pb-2"

    return(
        <nav className="flex w-full justify-between items-center px-4 py-2 bg-slate-900">
            <h1 className="text-4x1 font-bold">Insane Beauty</h1>
            <ul className="flex gap-16">
                <li className={active == "agendamento" ? classActive: ""}><Link href="/">Agendamento</Link></li>
                <li className={active == "unidades" ? classActive: ""}><Link href="/">Unidades</Link></li>
                <li className={active == "servicos" ? classActive: ""}><Link href="/">Serviços</Link></li>
                <li className={active == "profissionais" ? classActive: ""}><Link href="/">Profissionais</Link></li>
                <li className={active == "sobre nos" ? classActive: ""}><Link href="/">Sobre Nós</Link></li>
                <li className={active == "contato" ? classActive: ""}><Link href="/">Contato</Link></li>
                <li className={active == "home" ? classActive: ""}><Link href="/">Home</Link></li>
            </ul>
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}
