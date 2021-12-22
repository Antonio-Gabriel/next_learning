import styles from "./styles.module.scss";

type ISubscribeProps = {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeProps) {
  return (
    <button className={styles.subscriptButton} type="button">
      Subscribe now
    </button>
  );
}
