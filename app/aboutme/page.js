import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/aboutme.module.css";

export default function Aboutme() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.box_left}>
          <div className={styles.profile_pic}>
            <Image src="/images/profile.jpg" fill="true" />
          </div>
        </div>
        <div className={styles.box_right}>
          <div className={styles.profile_content}>
            <h2>Blog travel</h2>
            <Link
              className="link-small"
              href="https://github.com/patsae/nextjs-blog-travel.git"
            >
              Github
            </Link>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
