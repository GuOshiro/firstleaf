import React from "react";
import * as styles from "./index.module.scss";
import Countdown from "../Countdown";
import Logo from "../Logo";
import Button from "../Button";

const COUNTDOWN_TIME = 300;

function Header() {
  return (
    <header className={`${styles.header}`}>
      <Logo />
      <div className={`${styles.rightSide}`}>
        <Countdown seconds={COUNTDOWN_TIME} />
        <Button label="Checkout" />
      </div>
    </header>
  );
}

export default Header;
