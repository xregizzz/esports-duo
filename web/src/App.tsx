import logoImg from "./assets/logo-nlw.svg";
import { MagnifyingGlassPlusIcon } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <div className="max-w-336 flex flex-col items-center mx-auto my-20">
        <img src={logoImg} alt="Logo da NLW" />
        <h1 className="text-6xl text-white font-black mt-20">
          Seu{" "}
          <span className="bg-gradient text-transparent bg-clip-text">duo</span>{" "}
          está aqui.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/src/assets/game-1.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                League of Legends
              </strong>
              <span className="text-zinc-300 text-sm block">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/src/assets/game-2.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                League of Legends
              </strong>
              <span className="text-zinc-300 text-sm block">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/src/assets/game-3.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                League of Legends
              </strong>
              <span className="text-zinc-300 text-sm block">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/src/assets/game-4.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                League of Legends
              </strong>
              <span className="text-zinc-300 text-sm block">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/src/assets/game-5.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                League of Legends
              </strong>
              <span className="text-zinc-300 text-sm block">4 anuncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/src/assets/game-6.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                League of Legends
              </strong>
              <span className="text-zinc-300 text-sm block">4 anuncios</span>
            </div>
          </a>
        </div>

        <div className="pt-1 bg-gradient self-stretch rounded-lg mt-8 overflow-hidden">
          <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-black block">
                Nao encontrou o seu Duo?
              </strong>
              <span className="text-zinc-400 block">
                Publique um anuncio para encontrar novos players!
              </span>
            </div>
            <button className="py-3 px-4 bg-violet-500 text-white rounded flex items-center gap-3 hover:cursor-pointer hover:bg-violet-600">
              <MagnifyingGlassPlusIcon size={24} />
              Publicar Anuncio
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
