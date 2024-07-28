import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMission, getRobot } from '../../api';
import './MissionDetail.css';

const MissionDetail = () => {
    // Extract the mission ID from the URL parameters
    const { id } = useParams();
    // Hook to programmatically navigate to different routes
    const navigate = useNavigate();
    // State to hold the mission details
    const [mission, setMission] = useState(null);
    // State to hold the robot details associated with the mission
    const [robot, setRobot] = useState(null);

    // useEffect hook to fetch mission and robot details when the component mounts or the ID changes
    useEffect(() => {
        // Fetch the mission details using the mission ID
        getMission(id).then(response => {
            const missionData = response.data;
            setMission(missionData);
            // Fetch the robot details associated with the mission
            return getRobot(missionData.robot);
        }).then(response => setRobot(response.data));
    }, [id]);

    // Display a loading message until the mission and robot details are fetched
    if (!mission || !robot) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            {/* Display the mission name */}
            <h1>{mission.name}</h1>
            {/* Display the mission description */}
            <p>{mission.description}</p>
            <div className="robot-info">
                <h2>Robot Information</h2>
                {/* Display the robot name */}
                <p>Name: {robot.name}</p>
                {/* Display the robot model name */}
                <p>Model: {robot.model_name}</p>
            </div>
            <div className="button-container">
                {/* Button to navigate back to the home page */}
                <button onClick={() => navigate('/')}>Return</button>
                {/* Button to navigate to the edit mission form */}
                <button onClick={() => navigate(`/edit-mission/${id}`)}>Edit Mission</button>
                {/* Button to navigate to the edit robot form */}
                <button onClick={() => navigate(`/edit-robot/${robot.id}`)}>Edit Robot</button>
            </div>
        </div>
    );
};

export default MissionDetail;