import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import CreateNote from "./components/CreateNote";
import Header from './components/Header';
import LoginPage from "./pages/LoginPage";
import NoteListPage from './pages/NoteListPage';
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header/>
          <Routes>
            <Route path="/" element={<NoteListPage />} />
            <Route path="/notes/:id" element={<NotePage />} />
            <Route path="/notes/create" element={<CreateNote />} />
            <Route path="/login" element={<LoginPage />} />

          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
