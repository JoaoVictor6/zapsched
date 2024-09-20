import { twMerge } from "tailwind-merge";

export default function Home() {
  const defaultCircleStyle = 'w-[200px] h-[200px] z-1 rounded-full absolute blur-[167px]';
  return (
      <main className="w-screen h-screen bg-[#000914] relative">
        <div className={twMerge(defaultCircleStyle, 'bg-[#3A86FF] bottom-4 right-4')} />
        <div className={twMerge(defaultCircleStyle, 'bg-[#7CB518] top-4 left-4')} />
      </main>
  );
}
