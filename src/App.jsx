import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import NotFound from './pages/NotFound';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />}/>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/starred" element={<Starred />}/>
      </Route>

      {/* <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
