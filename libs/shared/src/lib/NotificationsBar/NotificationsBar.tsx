import styles from './styles.module.css';

type Props = {
  message: string;
  type?: string;
};

export const NotificationsBar = ({ message, type }: Props) => {
  return <div className={styles.notificationsBar}>{message}</div>;
};
