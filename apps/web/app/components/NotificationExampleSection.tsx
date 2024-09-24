"use client"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Notification, NotificationVariant } from "../components/Notification"
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client"

const INITIAL_NOTIFICATION_STATE: NotificationVariant[] = ['NEW'];
const setNewNotification = (notifications: NotificationVariant[]): NotificationVariant[] => {
  if (notifications.length > 3) return [] as NotificationVariant[]
  const variants: NotificationVariant[] = ['NEW', 'EDIT', 'INFO']
  
  return [
    ...notifications,
    variants[Math.round(Math.random() * (variants.length - 1))
  ] as NotificationVariant]
}

export const NotificationExampleSection = () => {
  const defaultCircleStyle = 'absolute rounded-full blur-[119px] bg-[#3A86FF]'
  const [ notifications, setNotifications ] = useState<NotificationVariant[]>(INITIAL_NOTIFICATION_STATE)
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(setNewNotification)
    }, 1000)
    return () => 
      clearInterval(interval)
  }, [])

  return (
    <section 
      className={twMerge('shadow-inner rounded-[20px] bg-[#202020] px-6 py-5', 'relative', 'w-[426px] h-[440px]', 'overflow-y-hidden overflow-x-hidden')}
      style={{
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
      }}
    >
    <section className="grid grid-cols-1 gap-3">
      <AnimatePresence>
        {notifications.map((variant, idx) => (
            <motion.div key={idx} exit={{ x: 400, opacity: 0.1, animationDuration: '1.2s' }}>
              <Notification variant={variant} />
            </motion.div>
        ))}
      </AnimatePresence>
    </section>
    <div aria-hidden className={twMerge('z-0')}>
      <div aria-hidden className={twMerge(defaultCircleStyle, 'opacity-[0.59] top-[30px] right-[36px] w-[114px] h-[114px]')} />
      <div aria-hidden className={twMerge(defaultCircleStyle, 'bottom-[106px] left-[48px] w-[68px] h-[68px]')} />
    </div>
    </section>
  );
}

