import NavBar from "@/components/NavBar";
import Image from 'next/image';
import { Button } from "@nextui-org/react";
import imagem from "../../public/mulher-cabelo-944x531.jpg";

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center bg-fuchsia-700">
      <NavBar active="home" />

      <section className="flex flex-row w-2/3 mt-10 py-5">
        <div className="flex flex-col justify-center w-1/2 mx-5">
          <h1 className="text-2xl">“A beleza de uma pessoa se define no detalhe que nem mesmo ela sabe que o possui.”</h1>
          <p className="text-center my-5">Clique no botão abaixo e venha nos mostrar sua beleza! </p>
          <Button 
            variant="solid" 
            size="md"
            className="font-semibold bg-fuchsia-900"
          >
            Agendar Horário
          </Button>
        </div>
        <Image
            src={imagem}
            alt="Picture of the author"
            className="w-50 h-50 rounded-full overflow-hidden"
        />
    
      </section>
      

    </main>

    
  );
}
