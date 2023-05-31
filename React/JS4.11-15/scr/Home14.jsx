import { useState } from "react";
import styles from './Home14.module.css'

function Home14() {
const [loggedIn, setLoggedIn] = useState(false);

const handleLoginClick = () => {
setLoggedIn(true);
};

const handleLogoutClick = () => {
setLoggedIn(false);
};

return (
<div className={styles.cointainer}>
{loggedIn ? <p>Войти</p> : <p>Выйти</p>}
<button className={styles.btn} onClick={loggedIn ? handleLogoutClick : handleLoginClick}>
{loggedIn ? "Выйти" : "Войти"}
</button>
</div>
);
}

export default Home14;