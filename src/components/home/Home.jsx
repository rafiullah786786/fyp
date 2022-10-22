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
            eaque veritatis voluptatibus ad eum recusandae sed, neque excepturi
            fuga nemo atque molestiae repudiandae deserunt error itaque ut nobis
            consequuntur id voluptas nisi beatae voluptate. Sed ea dicta
            voluptas? Impedit dolorum pariatur doloribus sint. Error
            repudiandae, eos quae nam mollitia voluptate pariatur quaerat aut
            dolores blanditiis impedit fugiat deserunt, architecto tenetur
            suscipit quidem ab placeat commodi possimus magnam totam corrupti,
            rem eveniet a. Debitis itaque, magni doloremque architecto sequi
            animi illum excepturi quo, illo nostrum sit est libero delectus,
            deleniti unde exercitationem consectetur quia explicabo aut.
            Repellat alias illo saepe sit iure perspiciatis corporis nam,
            suscipit officia accusamus. Modi a nulla vero facere corrupti quam
            fugit debitis quod dolorem omnis sunt, mollitia repellat dolor
            assumenda. Mollitia vitae repellendus odio alias rem libero quaerat
            sed minus, dolore voluptas, exercitationem esse totam quia deserunt
            deleniti! Velit porro saepe tempore repudiandae voluptatem dolor
            suscipit rerum, provident illo rem, assumenda ratione accusantium
            ipsum necessitatibus consequuntur architecto temporibus, eos
            perferendis ab illum? Itaque ratione vitae numquam harum fugit? Non,
            iste harum! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Laborum odio praesentium officia, eos deleniti sit molestias
            ut pariatur eius voluptates sed nihil autem aliquid at fuga labore
            ab ducimus numquam sint doloribus accusamus similique cum magnam
            excepturi. imus ad minima, corporis, dolorem, repellat ratione
            libero cupiditate unde praesentium. Impedit tenetur delectus
            aspernatur laborum illum quae obcaecati praesentium voluptatem
            provident at veniam numquam ipsum sequi, nostrum nobis, optio ex ea.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
