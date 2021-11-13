import React  from "react";
import styles from "./Button.module.css";

export default function setting(props){

    return(
        <button className={styles.setting}>{props.title}</button>
    )
}