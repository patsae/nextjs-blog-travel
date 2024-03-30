import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/home.module.css";

export default async function Blog(req) {
  const id = req.params.id;
  const blog_res = await fetch("http://localhost:3000/api/travels/" + id);
  const mytravels_res = await fetch(
    "http://localhost:3000/api/travels?orderby=id&sort=asc&limit=3"
  );
  const blog = await blog_res.json();
  const mytravels = await mytravels_res.json();
  return (
    <div className="container">
      <div className="main">
        <div className="main-content">
          {blog.map(({ id, name, detail, coverimage, latitude, longitude }) => (
            <div className={styles.blog_content}>
              <div className={styles.blog_img}>
                <Image src={coverimage} fill="true" alt={name} title={name} />
              </div>
              <div>
                <h1>{name}</h1>
              </div>
              <div className={styles.blog_latlng}>
                {latitude + ", " + longitude}
              </div>
              <hr />
              <div className={styles.blog_detail}>{detail}</div>
            </div>
          ))}
        </div>
        <div className="sidebar">
          <div className="profile">
            <Image
              src="/images/profile.jpg"
              alt="Byrd"
              fill="true"
              objectFit="cover"
            />
          </div>
          <div className="me">
            <h3>Byrd</h3>
            <Link
              className="link-small"
              href="https://github.com/patsae/nextjs-blog-travel.git"
            >
              Github
            </Link>
            <hr />
            <p className="introduce-myself">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="activity-box">
            <hr />
            <h4>My travel</h4>

            {mytravels.map(
              ({ id, detail, name, coverimage, latitude, longitude }) => (
                <div className={styles.mytravel_panel}>
                  <div className={styles.mytravel_img}>
                    <Link href={`/blogs/${id}`}>
                      <Image
                        src={coverimage}
                        width={100}
                        height={100}
                        alt={name}
                      />
                    </Link>
                  </div>
                  <div className={styles.mytravel_content}>
                    <div className={styles.mytravel_title}>
                      <h4>
                        <Link href={`/blogs/${id}`}>{name}</Link>
                      </h4>
                    </div>
                    <div className={styles.mytravel_detail}>
                      {detail.substring(0, 100)}
                    </div>
                    <div className={styles.mytravel_latlng}>
                      {latitude}, {longitude}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
