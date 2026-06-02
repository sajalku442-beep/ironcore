import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased">
        {/* Navigation Bar */}
        <Navbar />

        {/* Primary Page Layout router portal */}
        <main className="flex-1">
          <AppRoutes />
        </main>

        {/* Footer info segment */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

