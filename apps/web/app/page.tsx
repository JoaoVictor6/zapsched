import { twMerge } from "tailwind-merge";
import { NotificationExampleSection } from "./components/NotificationExampleSection";
import Image from "next/image";
import * as motion from "framer-motion/client"

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
    <section className="relative p-4 grid gap-6">
      <motion.h1 transition={{ delay: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="font-bold text-[40px] text-white">
        Facilite sua vida,<br /> organize sua agenda
      </motion.h1>
      <motion.p
        transition={{ delay: 0.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-semibold text-[20px] text-white max-w-[25vw] leading-relaxed"
      >
        Automatize sua agenda no WhatsApp sem esforço. O zapSched organiza, notifica e gerencia tudo para você. Tenha mais tempo para o que importa!
      </motion.p>
      <motion.div
        transition={{ delay: 0.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Image
          className={twMerge('absolute left-[110%] bottom-6 scale-[2.6]')}
          loading="eager"
          aria-hidden
          alt="Seta intuitiva"
          src="/organic-arrow.svg"
          height={165.21}
          width={71.01}
        />
      </motion.div>
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
