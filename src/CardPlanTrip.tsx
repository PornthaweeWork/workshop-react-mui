import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { IMAGES, Star } from "./assets";

export default function CardPlanTrip() {
  return (
    <Card sx={{ width: 300, overflow: "auto", resize: "horizontal" }}>
      <CardOverflow>
        <AspectRatio maxHeight={200} minHeight={120}>
          <img src={IMAGES.fuji} alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography
          level="h4"
          endDecorator={
            <Typography
              level="title-sm"
              startDecorator={<Star sx={{ fontSize: "md" }} />}
            >
              4.8
            </Typography>
          }
        >
          Mt. Fuji
        </Typography>
        <Typography level="body-sm">Fuji-Hakone-Izu National Park</Typography>
      </CardContent>
      <CardActions
        buttonFlex="100%"
        sx={{ flexWrap: "wrap", "& button": { borderRadius: 50 } }}
      >
        <Button>Set Plan</Button>
        <Button color="neutral" variant="plain">
          Save to bucket list
        </Button>
      </CardActions>
    </Card>
  );
}
