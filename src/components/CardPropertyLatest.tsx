import { AspectRatio, Avatar, Card, CardContent, Typography } from '@mui/joy'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

export default function CardPropertyLatest() {
  const [heart, setHeart] = useState(false)
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <AspectRatio ratio="21/9" sx={{ width: "400px", borderRadius: 'lg', marginBottom: "-30px"}}>
        <img src="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
      </AspectRatio>
      <Card sx={{ width: "350px"}}>
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
            {heart ?
              <FavoriteIcon onClick={() => setHeart(false)} sx={{ fontSize: '20px', color: 'red' }} />
              : <FavoriteBorderIcon onClick={() => setHeart(true)} sx={{ fontSize: '20px' }} />
            }
          </CardContent>
          <CardContent>
            <Typography level="h4" className="">Amazing Decorative House</Typography>
            <Typography color="neutral" level="body-md">Lorem ipsum dolor. consectetur...</Typography>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  )   
}