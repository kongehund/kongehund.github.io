import Intro from "./Intro";
import Projects from "./Projects";
import "./Homepage.scss";
import Header from "../../components/Header";

export default function Homepage() {
    return (
        <div className="homepageContainer">
            <Header />
            <Intro />
            <Projects />
        </div>
    )
}