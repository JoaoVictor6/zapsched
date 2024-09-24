import { IconCalendarDue, IconCalendarMinus, IconCalendarPlus, IconCalendarStats } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

const iconNotificationConfig = {
  EDIT: {
    BACKGROUND: '#FFD457',
    STROKE: '#A78B38',
    ICON: IconCalendarDue,
  },
  REMOVE: {
    BACKGROUND: '#F26880',
    STROKE: '#AB495A',
    ICON: IconCalendarMinus,
  },
  NEW: {
    BACKGROUND: '#B6D480',
    STROKE: '#536533',
    ICON: IconCalendarPlus,
  },
  INFO: {
    BACKGROUND: '#ACCCFF',
    STROKE: '#265AAD',
    ICON: IconCalendarStats,
  }
} as const

export function NotificationIcon({ variant }: { variant: keyof typeof iconNotificationConfig }) {
  if(!variant) return;
  const { BACKGROUND, ICON, STROKE } = iconNotificationConfig[variant];
  return (
    <div aria-hidden className={twMerge('rounded-full p-4')} style={{ background: BACKGROUND }}>
      <ICON size={24} color={STROKE} />
    </div>
  );
}
