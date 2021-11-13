import React  from "react";
import styles from "./Button.module.css"

const getChangeBackground = (title) => {
    switch(title) {
        case "JOIN US":
            return {
                background : "#77BFF7"
            }
            case "SETTINGS":
            return {
                background : "GREY"
            }
            case "LOGIN":
            return {
                background : "yellowgreen"
            }
            case "CONTACT US":
            return {
                background : "orange"
            }
            case "SEARCH":
            return {
                background : "lightgreen"
            }
            case "HELP":
            return {
                background : "#272727"
            }
            case "HOME":
            return {
                background : "lightpink"
            }
            case "DOWNLOAD":
            return {
                background : "#d39c3e"
            }
           
            default: 
            return{}
    }
}
export default function joinus(props){
const {title} = props;
const style = getChangeBackground(title);
    return(
        <button className={styles.home} style={style}>{props.title}</button>
    )
}