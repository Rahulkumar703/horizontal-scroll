import { useEffect } from 'react';
import './App.css';
import Banner from './Banner';
import TeamCard from './TeamCard'
import TeamsJson from './Teams.json';

function App() {
  useEffect(() => {
    const teams = document.querySelector('.team');
    const teamsContainer = document.querySelector('.team-container');
    const windowWidth = window.innerWidth;
    //changed done by me in this line
    const containerLength1 = teamsContainer.scrollWidth;
    const containerLength = containerLength1;
    // changed done by me in this two above line
    const disTop = teams.offsetTop;
    const scrollDist = disTop + containerLength - windowWidth;
    teams.style.height = containerLength + 'px';

    window.onscroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop >= disTop && scrollTop <= scrollDist) {
        teamsContainer.style.transform = `translateX(-${scrollTop - disTop}px)`;
        console.log(`containerLength:${containerLength}`);
        console.log(`scrollTop:${scrollTop}`);
        console.log(`distTop:${disTop}`);
        console.log(`scrollDist:${scrollDist}`);
      }
    }
  }, []);
  return (
    <div className="App">
      <Banner />
      <div className='team'>
        <div className="team-section">
          <div className="section-heading">
            <p>The Team</p>
          </div>
          <div className="team-container">
            {TeamsJson.map((team, index) => {
              return <TeamCard key={index} team={team} />
            })}
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default App;
