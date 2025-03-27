import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

interface ScoreCardProps {
  title: string;
  description?: string;
  cardContent?: string;
  cardFooter?: string;
  avatar?: string;
}

export default function ScoreCard({
  title,
  description,
  cardContent,
  cardFooter,
  avatar,
}: ScoreCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={title} />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>{cardContent}</p>
      </CardContent>
      <CardFooter>
        <p>{cardFooter}</p>
      </CardFooter>
    </Card>
  );
}
