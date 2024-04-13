import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminPage from './AdminPage';
import StudentPage from './StudentPage';
import IndexPage from './IndexPage';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/aluno" element={<StudentPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default Main;