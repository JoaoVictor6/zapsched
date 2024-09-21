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
  return <h1>Notification {variant}</h1>
}
