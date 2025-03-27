import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

interface Player {
  name: string;
  wins: number;
  avatar: string;
}

interface LeaderboardProps {
  players: Player[];
}

export default function Leaderboard({ players }: LeaderboardProps) {
  // Sort players by wins in descending order
  const sortedPlayers = [...players].sort((a, b) => b.wins - a.wins);
  const totalMatches = players.reduce((sum, player) => sum + player.wins, 0);
  const totalPossibleMatches = 74;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="flex justify-center items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <span className="text-sm text-gray-500">
          (Completed Matches {totalMatches}/{totalPossibleMatches})
        </span>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Player</TableHead>
            <TableHead className="text-right">Wins</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPlayers.map((player, index) => (
            <TableRow key={player.name}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="flex items-center gap-3">
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-8 h-8 rounded-full"
                />
                {player.name}
              </TableCell>
              <TableCell className="text-right">{player.wins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
