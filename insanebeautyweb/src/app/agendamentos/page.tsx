import NavBar from "@/componentes/NavBar";

export default function Agendamentos(){
    return(
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="agendamento" />

            <section className="flex flex-col gap-2 bg-slate-800 min-w-[600px] mt-4 p-2 rounded">
                <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Agendamento</h2>
                </div>
            </section>
    </main>

    );
}