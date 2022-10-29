import { Card, CardActions, CardContent, CardMedia, Chip, Rating, Slider, Typography } from '@mui/material'
import { Book } from '../types'



const myCardStyle = { backgroundColor: '#f5f6f7' }
const myCardSx = { m: 2, p: 2, maxWidth: 300 }

const BookCard = ({ title, author, summary, rating, startDate, progress, img }: Book) => (
    <>
        <Card style={myCardStyle} sx={myCardSx}>
            <CardMedia component="img" height="450px" image={img} />
            <CardContent>
                <Typography variant='h5'>{title}</Typography>
                <Typography variant='subtitle1'>{author}</Typography>
                <Typography variant='body2' color="text.secondary">{summary}</Typography>
            </CardContent>

            <CardActions> <Rating value={rating} /></CardActions>
            <CardActions> Started at  <Chip sx={{ ml: 2 }} label={startDate.toLocaleDateString()} /></CardActions>
            <CardActions> Progress <Slider sx={{ ml: 2 }} aria-label="Volume" value={progress} /></CardActions>

        </Card>
    </>
)

export default BookCard