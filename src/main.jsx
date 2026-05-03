import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './pages/App.jsx'
import Header from './components/Header.jsx'
import RegisterPage from './pages/Register.jsx'
import LoginPage from './pages/Login.jsx'
import './index.css'
import PublicShelfPage from './pages/PublicShelfPage.jsx'

function AppWithHeader() {
  const location = useLocation();
  const hideHeaderPaths = ['/login', '/register'];

  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);
  return (
    <>
      {!shouldHideHeader && <Header />}
      <main>
        <Routes>
          <Route path="/my-shelf" element={<App />} />
          <Route path="/public-shelf" element={<PublicShelfPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppWithHeader />
    </BrowserRouter>
  </StrictMode>,
)
