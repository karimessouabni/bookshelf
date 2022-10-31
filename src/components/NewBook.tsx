import { Card, CardMedia, CardContent, CardActions, Rating, Slider, TextField, TextareaAutosize, Button } from '@mui/material'
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { Book } from '../types'

type NewBookProps = {
    onAddBook: (book: Book) => void
}
const myCardStyle = { backgroundColor: '#f5f6f7' }
const myCardSx = { m: 2, p: 2, mr: 20, ml: 5, maxWidth: 300 }

const BOOK_TO_INITIALIZE: Book = {
    title: '',
    author: '',
    summary: '',
    rating: 0,
    startDate: dayjs().toDate(),
    progress: 0,
    img: ''
}


const NewBook = ({onAddBook}: NewBookProps) => {

    const [book, setBook] = useState<Book>(BOOK_TO_INITIALIZE as Book)

    const titleChangeHandler = (event: any) => {
        setBook(prevBook => ({ ...prevBook, title: event.target.value }))
    }

    const authorChangeHandler = (event: any) => {
        setBook(prevBook => ({ ...prevBook, author: event.target.value }))
    }

    const summaryChangeHandler = (event: any) => {
        setBook(prevBook => ({ ...prevBook, summary: event.target.value }))
    }

    const ratingChangeHandler = (event: any, newValue: any) => {
        setBook(prevBook => ({ ...prevBook, rating: newValue }))
    }

    const progressChangeHandler = (event: any, newValue: any) => {
        setBook(prevBook => ({ ...prevBook, progress: newValue }))
    }

    const startedDateChangeHandler = (newValue: any) => {
        setBook(prevBook => ({ ...prevBook, startDate: newValue.toDate() }))
    }

    const imgChangeHandler = (event: any) => {
        setBook(prevBook => ({ ...prevBook, img: event.target.value }))
    }


    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        onAddBook(book)
        setBook(BOOK_TO_INITIALIZE); // clearing the form
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <Card style={myCardStyle} sx={myCardSx}>
                    <CardMedia component="img" height="450px" image={book.img} />
                    <TextField onChange={imgChangeHandler} value={book.img} label="image url" variant="standard" />

                    <CardContent>
                        <TextField onChange={titleChangeHandler} value={book.title} label="Title" variant="standard" margin='normal' />
                        <TextField onChange={authorChangeHandler} value={book.author} label="Author" variant="standard" margin='normal' />
                        <TextareaAutosize onChange={summaryChangeHandler} aria-label="minimum height" minRows={3} value={book.summary} placeholder="Book summary" style={{ width: 200 }} />
                    </CardContent>
                    <CardActions> <Rating onChange={ratingChangeHandler} value={book.rating} /></CardActions>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Started at"
                            inputFormat="DD/MM/YYYY"
                            value={dayjs(book.startDate)}
                            onChange={startedDateChangeHandler}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>


                    <CardActions> Progress <Slider onChange={progressChangeHandler} sx={{ ml: 2 }} aria-label="Volume" valueLabelDisplay='auto' value={book.progress} />%</CardActions>
                    <Button variant="contained" color="success" type='submit'>
                        Add Book
                    </Button>
                </Card>


            </form>
        </>
    )
}

export default NewBook