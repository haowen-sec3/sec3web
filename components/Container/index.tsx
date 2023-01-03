import styles from "./container.module.scss";

type Container = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Container) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
