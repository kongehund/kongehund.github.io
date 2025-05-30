import PillButton from "../../components/PillButton";
import introStyles from "./Intro.module.css";
import globalStyles from "./Tempora.module.css";
import downloadSVG from "../../assets/download.svg";

export default function Intro() {
    return (
        <div className={introStyles.introContainer} id="intro">
            <div className={introStyles.introImage}>
                <img src="/tempora-logo.png" alt="Tempora Logo" />
            </div>
            <div className={introStyles.introText}>
                <h1>Tempora</h1>
                <h2>Quick and Efficient Music Timing</h2>
                <p>Tempora is an application designed to simplify and speed up the process of synchronizing a recorded piece of music to a digital metronome. 
                    This is achieved via a simple-to-use GUI that lets you manipulate timing points and visualize how the audio aligns with the current timing. 
                </p>
                <div className={introStyles.introButtonContainer}>
                    <PillButton onClick={() => { window.open("https://github.com/teamkongehund/Tempora/releases", "_blank"); }}>
                        <img src={downloadSVG} alt="Download Icon" className={globalStyles.buttonIcon}/>
                        Download
                    </PillButton>
                </div>
            </div>
        </div>
    )
}