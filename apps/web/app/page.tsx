import { twMerge } from "tailwind-merge";

const BackgroundCircles = () => {
  const defaultCircleStyle = 'w-[300px] h-[300px] z-1 rounded-full absolute blur-[267px]';

  return (
    <>
      <div aria-hidden className={twMerge(defaultCircleStyle, 'bg-[#3A86FF] bottom-4 right-80')} />
      <div aria-hidden className={twMerge(defaultCircleStyle, 'bg-[#7CB518] top-7 left-20')} />
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

const NotificationExampleSection = () => {
  const defaultCircleStyle = 'absolute rounded-full blur-[119px] bg-[#3A86FF]'
  return (
    <section className={twMerge('shadow-inner rounded-[20px] bg-[#202020] px-6 py-5', 'relative', 'w-[426px] h-[300px]')}>
      <div aria-hidden className={twMerge(defaultCircleStyle, 'opacity-[0.59] top-[30px] right-[36px] w-[114px] h-[114px]')} />
      <div aria-hidden className={twMerge(defaultCircleStyle, 'bottom-[106px] left-[48px] w-[68px] h-[68px]')} />
    </section>
  );
}

export default function Home() {
  return (
    <main className={twMerge('w-screen h-screen bg-[#000914] relative')}>
      <BackgroundCircles />
      <section className={twMerge('flex justify-evenly items-center', 'h-screen')}>
        <HomeCopy />
        <NotificationExampleSection />
      </section>
    </main>
  );
}
