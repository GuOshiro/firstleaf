import React from "react";
import * as styles from "./index.module.scss";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

function Layout({ children }: Props) {
  return <div className={styles.layout}>{children}</div>;
}

export default Layout;
