import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getMissions = () => axios.get(`${API_URL}/missions/`);
export const getMission = (id) => axios.get(`${API_URL}/missions/${id}/`);
export const getRobots = () => axios.get(`${API_URL}/robots/`);
export const getRobot = (id) => axios.get(`${API_URL}/robots/${id}/`);
export const createMission = (mission) => axios.post(`${API_URL}/missions/`, mission);
export const createRobot = (robot) => axios.post(`${API_URL}/robots/`, robot);
export const updateMission = (id, mission) => axios.put(`${API_URL}/missions/${id}/`, mission);
export const updateRobot = (id, robot) => axios.put(`${API_URL}/robots/${id}/`, robot);