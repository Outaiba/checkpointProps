import logo from "./logo.svg";
import "./App.css";
import Profile from "./component/Profile";

function App() {
  const fullName = {
    name: "outaiba",
    lastName: "GHERAIRI",
  };
  const bio = 34;
  const profession = "student";

  const handleName = (x) => {
    alert(x);
  };

  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio={bio}
        profession={profession}
        handleName={handleName}
      >
        <img src="https://thumbs.dreamstime.com/b/petite-bande-dessin%C3%A9e-d-oiseau-de-griffonnage-tir%C3%A9-par-la-main-sch%C3%A9ma-colorant-108507142.jpg" />
      </Profile>
    </div>
  );
}

export default App;
