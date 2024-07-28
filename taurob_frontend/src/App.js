import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MissionList from './components/MissionList/MissionList';
import MissionDetail from './components/MissionDetail/MissionDetail';
import RobotForm from './components/RobotForm/RobotForm';
import MissionForm from './components/MissionForm/MissionForm';

const App = () => {
  return (
      // Router component to enable routing in the application
      <Router>
        {/* Routes component to define all the routes in the application */}
        <Routes>
          {/* Route for the home page displaying the list of missions */}
          <Route path="/" element={<MissionList />} />
          {/* Route for displaying the details of a specific mission */}
          <Route path="/missions/:id" element={<MissionDetail />} />
          {/* Route for creating a new robot */}
          <Route path="/create-robot" element={<RobotForm />} />
          {/* Route for creating a new mission */}
          <Route path="/create-mission" element={<MissionForm />} />
          {/* Route for editing an existing robot */}
          <Route path="/edit-robot/:id" element={<RobotForm />} />
          {/* Route for editing an existing mission */}
          <Route path="/edit-mission/:id" element={<MissionForm />} />
        </Routes>
      </Router>
  );
};

export default App;