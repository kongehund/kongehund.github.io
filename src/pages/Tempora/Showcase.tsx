import './Showcase.scss';

export default function Showcase(){
    return (
        <div className="showcaseContainer" id="showcase">
            <div className="showcaseText">
              <h1>Showcase & Tutorial</h1>
              <p>Learn more about Tempora and become familiar with basic usage.</p>
            </div>
            <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/4_UN0Rxjv-w?si=fGiUEhpZ-XjJ2jeo" 
          title="YouTube video player" 
        //   frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
            ></iframe>
        </div>
    );
};