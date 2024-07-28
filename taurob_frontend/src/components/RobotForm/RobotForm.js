import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRobot, createRobot, updateRobot } from '../../api';
import { toast } from 'react-toastify';
import './RobotForm.css';

const RobotForm = () => {
    // Extract the robot ID from the URL parameters
    const { id } = useParams();
    // Hook to programmatically navigate to different routes
    const navigate = useNavigate();
    // State to hold the robot details
    const [robot, setRobot] = useState({ name: '', model_name: '' });

    // useEffect hook to fetch robot details if an ID is present
    useEffect(() => {
        if (id) {
            // Fetch the robot details using the robot ID
            getRobot(id).then(response => setRobot(response.data));
        }
    }, [id]);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Determine whether to create a new robot or update an existing one
        const saveAction = id ? updateRobot(id, robot) : createRobot(robot);
        saveAction.then(() => {
            // Show success toast notification
            toast.success(`Robot ${id ? 'updated' : 'created'} successfully!`);
            // Navigate to the appropriate page
            navigate(id ? `/missions/${id}` : '/');
        }).catch(error => {
            // Show error toast notification
            toast.error(`Failed to ${id ? 'update' : 'create'} robot.`);
        });
    };

    return (
        <div className="form-container">
            {/* Display the form title based on whether it's an edit or create form */}
            <h1>{id ? 'Edit Robot' : 'Create Robot'}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={robot.name}
                        onChange={(e) => setRobot({ ...robot, name: e.target.value })}
                    />
                </label>
                <label>
                    Model Name:
                    <input
                        type="text"
                        value={robot.model_name}
                        onChange={(e) => setRobot({ ...robot, model_name: e.target.value })}
                    />
                </label>
                <button type="submit">{id ? 'Update Robot' : 'Create Robot'}</button>
            </form>
        </div>
    );
};

export default RobotForm;