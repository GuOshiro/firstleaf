import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./index.module.scss";

function Logo() {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "logo.svg" }) {
            publicURL
          }
        }
      `}
      render={(data) => (
        <img
          className={styles.logo}
          src={data.file.publicURL}
          alt="Leafy Logo"
        />
      )}
    />
  );
}

export default Logo;
