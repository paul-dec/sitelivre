"use client";

import Image from "next/image";

export default function Home() {
  let pos = 1;
  function right() {
    document.getElementById(pos.toString())?.setAttribute("style", "display: none");
    pos++;
    if (pos > 6) {
      pos = 1;
    }
    document.getElementById(pos.toString())?.setAttribute("style", "display: flex");
  }
  function left() {
    document.getElementById(pos.toString())?.setAttribute("style", "display: none");
    pos--;
    if (pos < 1) {
      pos = 6;
    }
    document.getElementById(pos.toString())?.setAttribute("style", "display: flex");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-2 py-8 bg-[#14412D]">
      <div className="flex flex-col z-10 w-full max-w-xl items-center justify-between">
        <h1 className="flex text-center text-[#FFDE18] text-4xl w-full mb-6">Mangez mieux qu’au restaurant, chez vous !</h1>
        <div className="flex w-[260px] min-h-[370px] justify-center mb-6 relative">
          <Image id="1" alt="livre 1" src={"/livre_1.png"} priority width={1000} height={1000} className="flex w-[260px] max-w-sm rounded-xl" />
          <Image id="2" alt="livre 2" src={"/livre_2.png"} priority width={1000} height={1000} className="hidden w-[260px] max-w-sm rounded-xl" />
          <Image id="3" alt="livre 3" src={"/livre_3.png"} priority width={1000} height={1000} className="hidden w-[260px] max-w-sm rounded-xl" />
          <Image id="4" alt="livre 4" src={"/livre_4.png"} priority width={1000} height={1000} className="hidden w-[260px] max-w-sm rounded-xl" />
          <Image id="5" alt="livre 5" src={"/livre_5.png"} priority width={1000} height={1000} className="hidden w-[260px] max-w-sm rounded-xl" />
          <Image id="6" alt="livre 6" src={"/livre_6.png"} priority width={1000} height={1000} className="hidden w-[260px] max-w-sm rounded-xl" />
          <svg onClick={right} className="absolute left-full top-1/2 -translate-y-1/2" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.2487 24.9998L18.1237 16.8748C17.7418 16.4929 17.5508 16.0068 17.5508 15.4165C17.5508 14.8262 17.7418 14.3401 18.1237 13.9582C18.5056 13.5762 18.9918 13.3853 19.582 13.3853C20.1723 13.3853 20.6584 13.5762 21.0404 13.9582L30.6237 23.5415C30.832 23.7498 30.9796 23.9755 31.0664 24.2186C31.1532 24.4616 31.1966 24.7221 31.1966 24.9998C31.1966 25.2776 31.1532 25.538 31.0664 25.7811C30.9796 26.0241 30.832 26.2498 30.6237 26.4582L21.0404 36.0415C20.6584 36.4234 20.1723 36.6144 19.582 36.6144C18.9918 36.6144 18.5056 36.4234 18.1237 36.0415C17.7418 35.6596 17.5508 35.1734 17.5508 34.5832C17.5508 33.9929 17.7418 33.5068 18.1237 33.1248L26.2487 24.9998Z" fill="#FFDE18" />
          </svg>
          <svg onClick={left} className="absolute right-full top-1/2 -translate-y-1/2" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7513 24.9998L31.8763 16.8748C32.2582 16.4929 32.4492 16.0068 32.4492 15.4165C32.4492 14.8262 32.2582 14.3401 31.8763 13.9582C31.4944 13.5762 31.0082 13.3853 30.418 13.3853C29.8277 13.3853 29.3416 13.5762 28.9596 13.9582L19.3763 23.5415C19.168 23.7498 19.0204 23.9755 18.9336 24.2186C18.8468 24.4616 18.8034 24.7221 18.8034 24.9998C18.8034 25.2776 18.8468 25.538 18.9336 25.7811C19.0204 26.0241 19.168 26.2498 19.3763 26.4582L28.9596 36.0415C29.3416 36.4234 29.8277 36.6144 30.418 36.6144C31.0082 36.6144 31.4944 36.4234 31.8763 36.0415C32.2582 35.6596 32.4492 35.1734 32.4492 34.5832C32.4492 33.9929 32.2582 33.5068 31.8763 33.1248L23.7513 24.9998Z" fill="#FFDE18" />
          </svg>
        </div>
        <a href="https://www.amazon.fr/Japprends-%C3%A0-cuisiner-avec-Roro/dp/2017239844" target="_blank" className="flex text-center w-full max-w-[360px] justify-center py-4 bg-[#FFDE18] text-[#14412D] font-bold rounded-xl  text-xl m-3">Précommander sur Amazon</a>
        <a href="https://www.fnac.com/a19419266/Aurore-Ghigliano-J-apprends-a-cuisiner-avec-Roro" target="_blank" className="flex text-center w-full max-w-[360px] justify-center py-4 bg-[#FFDE18] text-[#14412D] font-bold rounded-xl  text-xl m-3">Précommander sur la Fnac</a>
        <a href="https://www.leslibraires.fr/livre/23359981-j-apprends-a-cuisiner-avec-roro-aurore-ghigliano-hachette-pratique" target="_blank" className="flex text-center w-full max-w-[360px] justify-center py-4 bg-[#FFDE18] text-[#14412D] font-bold rounded-xl  text-xl m-3">Précommander sur Leslibraires</a>
      </div>
    </main>
  );
}
