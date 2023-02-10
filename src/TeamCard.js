import React from 'react';
import './TeamCard.css';

function TeamCard({ team }) {
    const { avatar, name } = team;
    return (
        <div className="team-card">
            <div className="team-avatar">
                <img src={avatar} alt="team-avatar" />
            </div>
            <div className="team-name">{name}</div>
        </div>
    );
}

export default TeamCard;
