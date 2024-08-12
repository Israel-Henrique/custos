import styles from "./styles.module.css";

const Container = ({children, customClass}) =>
<div className = {`${styles.container} ${styles[customClass]}`}>
    {children}
</div>;

export default Container;