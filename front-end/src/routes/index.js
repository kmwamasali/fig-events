import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventPage from '../components/eventPage';
import Home from '../components/home';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;