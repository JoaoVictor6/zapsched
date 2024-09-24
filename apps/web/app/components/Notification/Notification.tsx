import * as motion from "framer-motion/client"
import { twMerge } from "tailwind-merge";
import { NotificationIcon } from "./NotificationIcon";

export type NotificationVariant = 'NEW' | 'REMOVE' | 'EDIT' | 'INFO'
const NOTIFICATION_BACKGROUND_COLOR = '#D9D9D9';
export function Notification({ variant }: { variant: NotificationVariant }) {
  return (
    <motion.section
      style={{ background: NOTIFICATION_BACKGROUND_COLOR }} 
      initial={{ scale: 0.2, y: 90, opacity: 0 }} 
      whileHover={{ scale: 1.03 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      className={twMerge('hover:cursor-pointer rounded-xl px-4 py-3 flex gap-4 max-w-[400px] truncate shadow-zinc-50')}
      
    >
      <NotificationIcon 
        variant={variant} 
      />

      <section className="space-y-1">
        <h2 className={twMerge('font-semibold text-lg truncate')}>Horario agendado</h2>
        <p className={twMerge('leading-snug truncate')}>
          Confirme para o dia 02/11 as 18:40
        </p>
      </section>
    </motion.section>
  )
}
