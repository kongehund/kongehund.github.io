// import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import Join from "./Join";
import Showcase from "./Showcase";
import "./Tempora.module.css";

const sections = [
    "Intro",
    "Showcase",
    "Join"
];

export default function Tempora() {
    return (
    <>
        <Header sections={sections}/>
        <Intro />
        <Showcase />
        <Join />
    </>)
}