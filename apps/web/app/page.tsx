import { twMerge } from "tailwind-merge";

const BackgroundCircles = () => {
  const defaultCircleStyle = 'w-[300px] h-[300px] z-1 rounded-full absolute blur-[267px]';

  return (
    <>
      <div className={twMerge(defaultCircleStyle, 'bg-[#3A86FF] bottom-4 right-80')} />
      <div className={twMerge(defaultCircleStyle, 'bg-[#7CB518] top-7 left-20')} />
    </>
  )
}

const HomeCopy = () => {
  return (
    <section className="p-4 grid gap-6">
      <h1 className="font-bold text-[40px] text-white">
        Facilite sua vida,<br /> organize sua agenda
      </h1>
      <p className="font-semibold text-[20px] text-white max-w-[25vw] leading-relaxed">
        Automatize sua agenda no WhatsApp sem esforço. O zapSched organiza, notifica e gerencia tudo para você. Tenha mais tempo para o que importa!
      </p>
    </section>
  );
}
export default function Home() {
  return (
    <main className={twMerge('w-screen h-screen bg-[#000914] relative', 'flex justify-center items-center')}>
      <BackgroundCircles />
      <HomeCopy />
    </main>
  );
}
