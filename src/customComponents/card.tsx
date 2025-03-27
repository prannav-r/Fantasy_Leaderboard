import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface ScoreCardProps {
  title: string;
  description?: string;
  cardContent?: string;
  cardFooter?: string;
}
export default function ScoreCard({
  title,
  description,
  cardContent,
  cardFooter,
}: ScoreCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
