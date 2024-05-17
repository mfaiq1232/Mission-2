import "./App.css";

import ThemeToggle from "./components/ThemeToggle";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <div className=" absolute right-4 top-2">
        <ThemeToggle />
      </div>
      <ProfilePage/>
    </>
  );
}

export default App;
