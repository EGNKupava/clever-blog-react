import React from "react";

import { Card } from "../card";

import styles from "./main.module.css";

const data = [
  {
    title: "Телевизор",
    description: "LG",
    imgSrc:
      "https://cdn21vek.by/img/galleries/6168/911/preview_b/43fe265t_blaupunkt_5f75af946fe00.jpeg",
    key: 1,
  },
  {
    title: "Телевизор",
    description: "LG",
    imgSrc:
      "https://cdn21vek.by/img/galleries/6168/911/preview_b/43fe265t_blaupunkt_5f75af946fe00.jpeg",
    key: 2,
  },
  {
    title: "Телевизор",
    description: "LG",
    imgSrc:
      "https://cdn21vek.by/img/galleries/6168/911/preview_b/43fe265t_blaupunkt_5f75af946fe00.jpeg",
    key: 3,
  },
];
export class Main extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        {data.map((cardData) => (
          <Card cardData={cardData} key={cardData.key} />
        ))}
      </div>
    );
  }
}
