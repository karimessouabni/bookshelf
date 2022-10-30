import { Card, CardMedia, CardContent, Typography, CardActions, Rating, Chip, Slider, TextField, TextareaAutosize } from '@mui/material';
import React, { ChangeEvent, useState } from 'react'
import { Book } from '../types';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';




type newBookProps = {
    onAddBook: (book: Book) => void;
}
const myCardStyle = { backgroundColor: '#f5f6f7' }
const myCardSx = { m: 2, p: 2, maxWidth: 300 }
const BOOK_TO_INITIALIZE: Book = {
    title: '',
    author: '',
    summary: '',
    startDate: dayjs().toDate(),
    progress: 0,
    rating: 0
} as Book;




const NewBook = ({ onAddBook }: newBookProps) => {

    const [book, setBook] = useState<Book>(BOOK_TO_INITIALIZE as Book);

    const startedDateChangeHandler = (newValue: any) => {
        setBook((prevBook: Book) => ({ ...prevBook, startDate: newValue.toDate() }));
    };

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onAddBook(book);
        setBook(BOOK_TO_INITIALIZE as Book); // clearing the form after its submission
    }

    const titleChangeHandler = (event: any) => {
        setBook((prevBook: Book) => ({ ...prevBook, title: event.target.value }));
    }

    const authorChangeHandler = (event: any) => {
        setBook((prevAuthor: Book) => ({ ...prevAuthor, author: event.target.value }));
    }

    const summaryChangeHandler = (event: any) => {
        setBook((prevBook: Book) => ({ ...prevBook, summary: event.target.value }));
    }

    const ratingChangeHandler = (event: any, newValue: any) => {
        setBook((prevBook: Book) => ({ ...prevBook, rating: newValue }));
    }

    const progressChangeHandler = (event: Event, newValue: any) => {
        setBook((prevBook: Book) => ({ ...prevBook, progress: newValue }));
    };



    // 
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    const fileUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files)
            return;

        const file = event.target.files[0];

        setSelectedFile(file)
        getBase64(file).then(base64 => {
            localStorage["fileBase64"] = base64;
            console.debug("file stored", base64);
        });

        console.log(URL.createObjectURL(event.target.files[0]))
    };
    // 

    return (
        <>
            <form onSubmit={submitForm}>
                <Card style={myCardStyle} sx={myCardSx}>
                    <CardMedia component="img" height="450px" image={selectedFile === null ? '' : URL.createObjectURL(selectedFile)} />

                    <input type="file" name="file"
                        onChange={fileUploadHandler}
                    />
                    {/* <img src={selectedFile === null ? '' : URL.createObjectURL(selectedFile)} alt="preview" /> */}

                    <CardContent>
                        <TextField variant="standard" label='title' value={book.title} onChange={titleChangeHandler} margin="normal" />
                        <TextField variant="standard" label='author' value={book.author} onChange={authorChangeHandler} margin="normal" />
                        <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Summary..." value={book.summary} onChange={summaryChangeHandler} style={{ width: 250, marginTop: 20 }} />
                    </CardContent>

                    <CardActions> <Rating value={book.rating} onChange={ratingChangeHandler} sx={{ mb: 2 }} /></CardActions>

                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DesktopDatePicker
                            label="Started at"
                            inputFormat="DD/MM/YYYY"
                            value={dayjs(book.startDate)}
                            onChange={startedDateChangeHandler}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <CardActions> Progress <Slider sx={{ ml: 2 }} onChange={progressChangeHandler} valueLabelDisplay="auto" value={book.progress} />%</CardActions>
                </Card>


                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default NewBook