import { useMotionValue, useTransform } from "framer-motion"
import * as motion from "framer-motion/client"

export enum NotificationVariant {
  EDIT = "EDIT",
  REMOVE = "REMOVE",
  CHANGE = "CHANGE",
  INFO = "INFO",

}

export type NotificationProps = {
  variant: NotificationVariant,
}

export function Notification({ variant }: NotificationProps) {
  return (
    <motion.section className="bg-red" initial={{ scale: 0.2 }} whileInView={{ scale: 1 }}>
      {variant}
    </motion.section>
  )
}
