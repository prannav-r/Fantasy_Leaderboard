import "./App.css";
import Card from "./customComponents/card";
import prAvatar from "../images/Pr.png";
import leoAvatar from "../images/leo.jpg";
import navAvatar from "../images/nav.jpg";
import niranjAvatar from "../images/niranj.jpg";

function App() {
  return (
    <div className="flex [&>div]:flex-1 flex-nowrap max-lg:flex-col gap-5">
      <Card
        title="Poggy"
        description="No of wins"
        cardContent="3"
        avatar={prAvatar}
      />
      <Card
        title="Leoiee"
        description="No of wins"
        cardContent="2"
        avatar={leoAvatar}
      />
      <Card
        title="Nav"
        description="No of wins"
        cardContent="1"
        avatar={navAvatar}
      />
      <Card
        title="Niranj"
        description="No of wins"
        cardContent="1"
        avatar={niranjAvatar}
      />
    </div>
  );
}

export default App;
