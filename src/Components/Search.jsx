import React  from "react";
import styles from "./Button.module.css"

export default function joinus(props){

    return(
        <button className={styles.search  }>{props.title}</button>
    )
}