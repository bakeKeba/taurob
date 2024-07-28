import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMission, createMission, updateMission, getRobots } from '../../api';
import { toast } from 'react-toastify';
import './MissionForm.css';

const MissionForm = () => {
    // Extract the mission ID from the URL parameters
    const { id } = useParams();
    // Hook to programmatically navigate to different routes
    const navigate = useNavigate();
    // State to hold the mission details
    const [mission, setMission] = useState({ name: '', description: '', robot: '' });
    // State to hold the list of robots
    const [robots, setRobots] = useState([]);

    // useEffect hook to fetch mission and robot details when the component mounts or the ID changes
    useEffect(() => {
        if (id) {
            // Fetch the mission details using the mission ID
            getMission(id).then(response => setMission(response.data));
        }
        // Fetch the list of robots
        getRobots().then(response => setRobots(response.data));
    }, [id]);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Determine whether to create a new mission or update an existing one
        const saveAction = id ? updateMission(id, mission) : createMission(mission);
        saveAction.then(() => {
            // Show success toast notification
            toast.success(`Mission ${id ? 'updated' : 'created'} successfully!`);
            // Navigate to the appropriate page
            navigate(id ? `/missions/${id}` : '/');
        }).catch(error => {
            // Show error toast notification
            toast.error(`Failed to ${id ? 'update' : 'create'} mission.`);
        });
    };

    return (
        <div className="form-container">
            {/* Display the form title based on whether it's an edit or create form */}
            <h1>{id ? 'Edit Mission' : 'Create Mission'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={mission.name}
                        onChange={(e) => setMission({ ...mission, name: e.target.value })}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        value={mission.description}
                        onChange={(e) => setMission({ ...mission, description: e.target.value })}
                    />
                </div>
                <div>
                    <label>Robot</label>
                    <select
                        value={mission.robot}
                        onChange={(e) => setMission({ ...mission, robot: e.target.value })}
                    >
                        <option value="">Select a robot</option>
                        {robots.map(robot => (
                            <option key={robot.id} value={robot.id}>{robot.name}</option>
                        ))}
                    </select>
                </div>
                <div className="button-row">
                    {/* Button to navigate back to the home page */}
                    <button type="button" onClick={() => navigate('/')} className="cancel-button">Cancel</button>
                    {/* Button to submit the form */}
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default MissionForm;