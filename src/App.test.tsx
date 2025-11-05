import { HashRouter, Routes, Route } from "react-router-dom";

const TestApp = () => (
  <HashRouter>
    <div className="min-h-screen bg-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold">AutoSalvage Test</h1>
      <p className="text-xl">If you see this, React is working!</p>
      <Routes>
        <Route path="/" element={<div>Home Route Working!</div>} />
        <Route path="/test" element={<div>Test Route Working!</div>} />
      </Routes>
    </div>
  </HashRouter>
);

export default TestApp;