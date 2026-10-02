import "./DarkMode.css";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  const SelectedTheme = localStorage.getItem("selectedztheme");

  if (SelectedTheme === "light") {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  return (
    <div className="dark-mode">
      <input
        className="dark-mode-input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={SelectedTheme !== "light"}
      />
      <label className="dark-mode-label" htmlFor="darkmode-toggle"></label>
    </div>
  );
};

export default DarkMode;
