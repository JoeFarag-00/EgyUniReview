import React from "react";
import styles from "./HomePage.module.css";
import Typed from "react-typed";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>EgyUniReview</h1>
        <h3>
          Experience the Ratings of Egypt&rsquo;s Universities - Make an
          Educated Choice!
        </h3>
      </div>
      <Typed
        strings={["Under Construction..."]}
        typeSpeed={40}
        backSpeed={30}
        loop
      />
    </div>
  );
};

export default HomePage;
