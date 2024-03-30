import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="main">
        <div className="main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          est enim, tincidunt eget convallis blandit, faucibus ac dolor.
          Curabitur turpis erat, efficitur ut malesuada at, finibus at felis. In
          porta mauris sit amet dolor auctor semper. Phasellus maximus
          condimentum urna, ac tempor magna blandit eget. Donec sollicitudin
          risus id nibh aliquam, eget dignissim odio gravida. Morbi porttitor
          lacus non scelerisque luctus. Aenean sollicitudin porttitor sem, in
          sagittis lectus blandit ac. In bibendum massa nec lorem efficitur
          molestie
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
          </div>
        </div>
      </div>
    </div>
  );
}
