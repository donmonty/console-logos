import React from "react";
import styles from '../styles/Home.module.css'
import Image from "next/image";
import imagePlaceholder from "../public/images/image-placeholder.png";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div 
        style={{ 
          marginBottom: "16px", 
          maxWidth: "345px",
          minWidth: "260px", 
          height: "260px", 
          position: "relative",
        }}
      >
        <Image
          src={props.url || imagePlaceholder}
          fill
          style={{ borderRadius: "10px" }}
        />
      </div>
      
      <a href={props.info || "#"}>
        <h2>{props.name || "Missing Name"}</h2>
      </a>
      <p>{props.description || "Missing description"}</p>
      
    </div>
  );
}