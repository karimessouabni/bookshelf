import React, { useState } from 'react'
import { Book } from '../types';



type newBookProps = {
    onAddBook: (book: Book) => void;
}

const NewBook = ({ onAddBook }: newBookProps) => {

    const [title, setTitle] = useState('');

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const submittedTitle = title;
        console.log(submittedTitle)


        onAddBook({
            title: "le petit prince",
            author: "Antoine de saint-exupéry",
            summary: "Le Petit Prince vient d’une planète à peine plus grande que lui sur laquelle il y a des baobabs et une fleur très précieuse, qui fait sa coquette et dont il se sent responsable. Le Petit Prince aime le coucher de soleil. Un jour, il l'a vu quarante-quatre foi ! Il a aussi visité d'autres planètes et rencontré des gens très importants qui ne savaient spas répondre à ses questions. Sur la Terre, il a apprivoisé le renard, qui est devenu son ami.",
            rating: 3,
            progress: 50,
            startDate: new Date(2022, 3, 1),
            img: require("../assets/lePetitPrince.jpg")
        });

        setTitle(''); // clearing the form after its submission
    }

    const titleChangeHandler = (event: any) => {
        console.log(event.target.value);
        setTitle(event.target.value)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>
                    Title:
                    <input type='title' name='title' value={title} onChange={titleChangeHandler} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewBook