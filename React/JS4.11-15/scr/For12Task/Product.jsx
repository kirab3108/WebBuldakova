import React from "react";
import styles from "./Product.module.css";

function Product(props) {
const { name, description, price } = props;

return (
<>
<div className={styles.item}>
<h3 className={styles.name}>{name}</h3>
<div style={{ display: "flex", justifyContent: "space-between" }}>
<img
className={styles.img}
src="https://mobimg.b-cdn.net/v3/fetch/ba/baa30c37307492aca2d40cbd621fb644.jpeg"
alt=""
/>
<p className={styles.info}>{description}</p>
</div>
<p className={styles.price}>Цена: {price} руб.</p>
</div>
</>
);
}

export default Product;