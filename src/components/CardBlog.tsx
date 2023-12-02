import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import Avatar from "@mui/joy/Avatar";

export default function CardPlanTrip() {
  return (
    <Card sx={{ width: 300, overflow: "auto", resize: "horizontal" }}>
      <CardOverflow>
        <AspectRatio maxHeight={200} minHeight={120}>
          <img
            src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&q=80&w=2889&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ paddingBottom: "16px" }}>
        <Chip color="primary">Technology</Chip>
        {/* <Typography color="primary" fontSize="sm" variant="solid">Technology</Typography> */}
        <Typography level="h4">
          Why is the tesla CyberTruck designed the way it is?
        </Typography>
        <Typography level="body-md">An exploration into the truck</Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", flexDirection: "row" }}>
        {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
        <Avatar
          size="lg"
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=3131&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div>
          <Typography level="body-md" sx={{ fontWeight: 600 }}>
            Carrie Brewer
          </Typography>
          <Typography level="body-md">2h ago</Typography>
        </div>
        {/* </div> */}
      </CardContent>
    </Card>
  );
}
