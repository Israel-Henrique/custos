const container = ({children, customClass}) =>
<div className = {`${styles.container} ${styles[customClass]}`}>
    {children}
</div>;