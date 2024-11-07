import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./index.module.scss";

function Logo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <img className={styles.logo} src={data.file.publicURL} alt="Leafy Logo" />
  );
}

export default Logo;
