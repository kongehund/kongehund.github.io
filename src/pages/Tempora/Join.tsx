import PillButton from "../../components/PillButton";
import "./Join.scss";
import { FaGithub, FaDiscord } from "react-icons/fa";

// function JoinBox({ children }: { children: React.ReactNode }){
//     return (
//         <div className="joinBox">
//             {children}
//         </div>
//     )
// }

export default function Join(){
    return (
        <div className="joinContainer" id="join">
            <div className="joinBox">
                <h1>Open Source</h1>
                <p>Check out the source code on GitHub, and try the newest features before they’re out. Code contributions are welcome!</p>
                <PillButton onClick={() => { window.open("https://github.com/teamkongehund/tempora", "_blank"); }}>
                    <FaGithub size={24} color="white" style={{ marginRight: '8px' }} />
                    GitHub
                </PillButton>
            </div>
            <div className="joinBox">
                <h1>Community Driven</h1>
                <p>Join the Discord to share and help each other with projects and be the first to be notified of new versions!</p>
                <PillButton onClick={() => { window.open("https://discord.gg/qyUXyyWsr3", "_blank"); }}>
                    <FaDiscord size={24} color="white" style={{ marginRight: '8px' }} />
                    Discord
                </PillButton>
            </div>
        </div>
    )
}