import React, { useEffect, useState } from 'react';
import { getMissions } from '../../api';
import { Link } from 'react-router-dom';
import './MissionList.css';

const MissionList = () => {
    // State to hold the list of missions
    const [missions, setMissions] = useState([]);

    // useEffect hook to fetch missions when the component mounts
    useEffect(() => {
        // Fetch missions from the API and update the state
        getMissions().then(response => setMissions(response.data));
    }, []);

    return (
        <div className="mission-list-container">
            {/* Title of the mission list */}
            <h1 className="title">Missions</h1>
            <ul className="mission-table">
                {/* Map through the missions and create a list item for each mission */}
                {missions.map(mission => (
                    <li key={mission.id}>
                        {/* Link to the mission detail page */}
                        <Link to={`/missions/${mission.id}`}>{mission.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="button-container">
                {/* Link to the create mission form */}
                <Link to="/create-mission">
                    <button>Create New Mission</button>
                </Link>
                {/* Link to the create robot form */}
                <Link to="/create-robot">
                    <button>Create New Robot</button>
                </Link>
            </div>
        </div>
    );
};

export default MissionList;