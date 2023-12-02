import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Typography,
  Button
} from "@mui/joy";
import { Star } from "../assets";

export default function CardPlanTrip() {
  return (
    <Card
      sx={{
        width: 300,
        resize: "horizontal"
      }}
    >
      <CardOverflow>
        <AspectRatio maxHeight="200px" minHeight="200px">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1547823065-4cbbb2d4d185?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
          <Typography level="h3">Mt. Fuki</Typography>
          <Star />
          <Typography sx={{ fontWeight: 500 }}>4.8</Typography>
        </div>
        <Typography>Fuji-Hakone-Izu National Park</Typography>
      </CardContent>
      <Button sx={{ borderRadius: 40 }}>Set Plan</Button>
      <Button variant="plain" color="neutral" sx={{ borderRadius: 40 }}>
        Set Plan
      </Button>
    </Card>
  );
}
