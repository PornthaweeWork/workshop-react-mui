import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function CardPluto() {
  return (
    <Card sx={{ width: 300, borderRadius: "2rem" }}>
      <CardCover>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"
        />
      </CardCover>
      <CardContent sx={{ color: "white", justifyContent: "flex-end" }}>
        <Typography
          sx={{ color: "#888", fontWeight: 600, letterSpacing: "1px" }}
        >
          TRENDING
        </Typography>
        <Typography level="title-sm" sx={{ color: "white" }}></Typography>
        test
      </CardContent>
    </Card>
  );
}
