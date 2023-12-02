import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { IMAGES, Star } from "./assets";

export default function CardBooking() {
  return (
    <Card
      variant="plain"
      orientation="horizontal"
      sx={{
        width: 400,
        height: "fit-content",
        overflow: "auto",
        resize: "horizontal",
        borderRadius: "xl", // See tokens in `radius` https://mui.com/joy-ui/customization/default-theme-viewer/
        boxShadow: "lg" // See tokens https://mui.com/joy-ui/customization/theme-shadow/
      }}
    >
      <AspectRatio flex ratio="1" sx={{ minWidth: 160 }}>
        <img alt="" src={IMAGES.hotel} />
      </AspectRatio>
      <CardContent>
        <Typography fontWeight="lg">
          Merapi Villa - Paradise on earth. All you can eat free everthing.
        </Typography>
        <Typography level="title-lg">
          $84{" "}
          <Typography
            sx={{
              color: "text.tertiary" // See tokens https://mui.com/joy-ui/customization/theme-colors/
            }}
          >
            / night
          </Typography>
        </Typography>
        <Typography
          startDecorator={
            <Star
              sx={{
                fontSize: "md" // See tokens https://mui.com/joy-ui/customization/default-theme-viewer/
              }}
            />
          }
          level="body-sm"
        >
          4.8 (223)
        </Typography>
        <Button size="lg" sx={{ borderRadius: 40, mt: 1, maxWidth: 200 }}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}
