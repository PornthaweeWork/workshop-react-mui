import { Card, AspectRatio, CardContent, Typography, Avatar } from "@mui/joy";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useEffect, useState } from "react";


export default function CardListProperty() {
  const [star, setStar] = useState(false)

  useEffect(() => {

  }, [star])
  return (
    <Card variant="plain" orientation="horizontal" className="w-[500px] h-fit shadow">
      <AspectRatio minHeight={140} maxHeight={140} sx={{ width: '120px', marginLeft: '-30px', marginTop: '-30px' }}>
        <img
          src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="vertical">
        <CardContent orientation="horizontal">
          <Avatar size="lg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Avatar>
          <div className="ml-2 mr-auto">
            <Typography level="title-md" startDecorator={
              <Typography level="body-md">by</Typography>}
            >Pornthawee Thaweesin
            </Typography>
            <Typography color="neutral" level="body-md" >January 21, 2019</Typography>
          </div>
          {star ?
            <StarIcon onClick={() => setStar(false)} sx={{ fontSize: '20px', color: 'orange' }} />
            : <StarBorderIcon onClick={() => setStar(true)} sx={{ fontSize: '20px' }} />
          }
        </CardContent>
        <CardContent>
          <Typography level="h4" className="">Amazing Decorative House</Typography>
          <Typography color="neutral" level="body-md">Lorem ipsum dolor. consectetur...</Typography>
        </CardContent>
      </CardContent>

    </Card>
  )
}