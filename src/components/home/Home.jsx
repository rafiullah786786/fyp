import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className="row">
      <div className={`${styles.main} col-sm-12 bg-light p-0`}>
        <div className={styles.overlay}></div>
        <video
          src="https://player.vimeo.com/external/376567153.hd.mp4?s=43db4efbdacaa88e124df9a016e3fe2854221a28&profile_id=175&oauth2_token_id=57447761"
          autoPlay
          loop
          muted
          style={{ opacity: "0.8" }}
        />
        <div className={styles.content}>
          <Navbar />
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            ipsum dolor ea similique. Quos repudiandae exercitationem odio
            placeat autem in, cupiditate at ipsa assumenda rerum laudantium
            aspernatur amet, quod quibusdam sit! Excepturi, iusto! Asperiores
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
