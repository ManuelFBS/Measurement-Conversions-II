import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ConversionsPage, HomePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <main className="container mx-auto px-10 pt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/conversions/fromto"
            element={<ConversionsPage />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
