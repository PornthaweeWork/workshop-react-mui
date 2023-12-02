import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { IMAGES } from "./assets";

export default function CardPluto() {
  return (
    <Card sx={{ width: 200, height: 200, borderRadius: 32, padding: "1.5rem" }}>
      <CardCover>
        <img alt="" src={IMAGES.pluto} />
      </CardCover>
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography
          level="body-sm"
          sx={{
            textTransform: "uppercase",
            color: "neutral.400", // See tokens https://mui.com/joy-ui/customization/theme-colors/
            fontWeight: "lg", // See tokens https://mui.com/joy-ui/customization/default-theme-viewer/
            letterSpacing: "1px"
          }}
        >
          Trending
        </Typography>
        <Typography
          level="title-lg"
          sx={{ textWrap: "balance", color: "#fff" }}
        >
          Beyond Pluto, the hunt for ninth planet
        </Typography>
      </CardContent>
    </Card>
  );
}
