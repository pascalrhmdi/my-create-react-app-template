import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.css";
import { Footer, Navigation } from "./components";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-white shadow-app py-3 mt-4">
        <Footer />
      </footer>
      {/* ScrollRestoration untuk mengembalikan scroll ke atas ketika berpindah halaman */}
      <ScrollRestoration />
    </>
  );
}

export default App;
