import "./App.css";
import Leaderboard from "./customComponents/leaderboard";
import prAvatar from "../images/Pr.png";
import leoAvatar from "../images/leo.jpg";
import navAvatar from "../images/nav.jpg";
import niranjAvatar from "../images/niranj.jpg";

function App() {
  const players = [
    { name: "Poggy", wins: 3, avatar: prAvatar },
    { name: "Leoiee", wins: 1, avatar: leoAvatar },
    { name: "Nav", wins: 1, avatar: navAvatar },
    { name: "Niranj", wins: 1, avatar: niranjAvatar },
  ];

  const totalMatches = players.reduce((sum, player) => sum + player.wins, 0);
  const totalPossibleMatches = 74;

  return (
    <div className="container mx-auto p-4">
      <Leaderboard players={players} />
    </div>
  );
}

export default App;
