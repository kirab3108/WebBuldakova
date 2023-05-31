import React from "react";
import Product from "./For12Task/Product";
import { useState } from 'react';

function Home12() {

const product = [
{
name: "Цветок шафрана",
description:
"Шафран — специя, которую получают из рыльцев цветов посевного крокуса, цветущего всего раз в году в течение трех недель",
price: 35,
},
{
name: "Цветок шафрана",
description:
"Шафран — специя, которую получают из рыльцев цветов посевного крокуса, цветущего всего раз в году в течение трех недель",
price: 1000,
},
{
name: "Цветок шафрана",
description:
"Шафран — специя, которую получают из рыльцев цветов посевного крокуса, цветущего всего раз в году в течение трех недель",
price: 897.13,
},
];

const [products, setProducts] = useState([...product]);

const sortByPriceAsc = () => {
const sortedProducts = [...products];
sortedProducts.sort((a, b) => a.price - b.price);
setProducts(sortedProducts);
};

const sortByPriceDesc = () => {
const sortedProducts = [...products];
sortedProducts.sort((a, b) => b.price - a.price);
setProducts(sortedProducts);
};

const sortByName = () => {
const sortedProducts = [...products];
sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
setProducts(sortedProducts);
};


return (
<>
<header>
<nav>
<ul>
<li>
<button onClick={sortByPriceAsc}>
Сортировать по возрастанию цены
</button>
</li>
<li>
<button onClick={sortByPriceDesc}>
Сортировать по убыванию цены
</button>
</li>
<li>
<button onClick={sortByName}>
Сортировать по алфавиту
</button>
</li>
</ul>
</nav>
</header>
<div
style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
>
{products.map((product) => (
<Product
key={product.name}
name={product.name}
description={product.description}
price={product.price}
/>
))}
</div>
</>
);
}

export default Home12;