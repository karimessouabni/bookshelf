import React, { useState } from 'react';
import BookCard from './components/BookCard';
import NewBook from './components/NewBook';
import { Book } from './types';


const INIT_BOOK_LIST: Book[] = [
  {
    title: "le petit prince",
    author: "Antoine de saint-exupéry",
    summary: "Le Petit Prince vient d’une planète à peine plus grande que lui sur laquelle il y a des baobabs et une fleur très précieuse, qui fait sa coquette et dont il se sent responsable. Le Petit Prince aime le coucher de soleil. Un jour, il l'a vu quarante-quatre foi ! Il a aussi visité d'autres planètes et rencontré des gens très importants qui ne savaient spas répondre à ses questions. Sur la Terre, il a apprivoisé le renard, qui est devenu son ami.",
    rating: 3,
    progress: 50,
    startDate: new Date(2022, 3, 1),
    img: require("./assets/lePetitPrince.jpg")
  },
  {
    title: "L'étranger",
    author: "Albert Camus",
    summary: "Condamné à mort, Meursault. Sur une plage algérienne, il a tué un Arabe. À cause du soleil, dira-t-il, parce qu'il faisait chaud. On n'en tirera rien d'autre. Rien ne le fera plus réagir : ni l'annonce de sa condamnation, ni la mort de sa mère, ni les paroles du prêtre avant la fin. Comme si, sur cette plage, il avait soudain eu la révélation de l'universelle équivalence du tout et du rien. La conscience de n'être sur la terre qu'en sursis, d'une mort qui, quoi qu'il arrive, arrivera, sans espoir de salut.",
    rating: 5,
    progress: 80,
    startDate: new Date(2022, 5, 10),
    img: require("./assets/letranger.jpg")
  }
  ,
  {
    title: "L'étranger",
    author: "Albert Camus",
    summary: "Condamné à mort, Meursault. Sur une plage algérienne, il a tué un Arabe. À cause du soleil, dira-t-il, parce qu'il faisait chaud. On n'en tirera rien d'autre. Rien ne le fera plus réagir : ni l'annonce de sa condamnation, ni la mort de sa mère, ni les paroles du prêtre avant la fin. Comme si, sur cette plage, il avait soudain eu la révélation de l'universelle équivalence du tout et du rien. La conscience de n'être sur la terre qu'en sursis, d'une mort qui, quoi qu'il arrive, arrivera, sans espoir de salut.",
    rating: 5,
    progress: 80,
    startDate: new Date(2022, 5, 10),
    img: require("./assets/letranger.jpg")
  }, {
    title: "La Civilisation, ma Mère !",
    author: "Driss Chraïbi",
    summary: "Le style de Driss Chraïbi réussit ce tour de force : rendre palpables les sentiments, désarrois, enthousiasmes, fidélités, ruptures, sans jamais ennuyer, avec une immense humanité et un intense respect pour ces femmes qui prennent en main leur propre destin et celui des leurs, dans une société hostile, sans faillir ni faiblir.",
    rating: 5,
    progress: 90,
    startDate: new Date(2022, 3, 2),
    img: require("./assets/laCiviMaMere.jpeg")
  },
  {
    title: "L'Auberge des pauvres ",
    author: "Tahar Ben Jelloun",
    summary: "Suivez-moi, nous quittons la terre rouge de Marrakech pour nous poser un jour de pluie sur le bord de la Méditerranée, oui j'ai osé tout quitter, j'ai fait le saut, je ne suis plus l'homme figé par la peur, à présent je suis ailleurs : je vous dirai Naples et ses bas-fonds, la gare de Naples un jour de vent et d'averse, une gare aussi immense et sale que toute la ville, une place des miracles avec des couleurs changeantes,",
    rating: 5,
    progress: 70,
    startDate: new Date(2022, 3, 2),
    img: require("./assets/laubergDesPauvres.jpeg")
  },
  {
    title: "L'Auberge des pauvres ",
    author: "Tahar Ben Jelloun",
    summary: "Suivez-moi, nous quittons la terre rouge de Marrakech pour nous poser un jour de pluie sur le bord de la Méditerranée, oui j'ai osé tout quitter, j'ai fait le saut, je ne suis plus l'homme figé par la peur, à présent je suis ailleurs : je vous dirai Naples et ses bas-fonds, la gare de Naples un jour de vent et d'averse, une gare aussi immense et sale que toute la ville, une place des miracles avec des couleurs changeantes,",
    rating: 5,
    progress: 70,
    startDate: new Date(2022, 3, 2),
    img: require("./assets/laubergDesPauvres.jpeg")
  }
  ,
  {
    title: "L'étranger",
    author: "Albert Camus",
    summary: "Condamné à mort, Meursault. Sur une plage algérienne, il a tué un Arabe. À cause du soleil, dira-t-il, parce qu'il faisait chaud. On n'en tirera rien d'autre. Rien ne le fera plus réagir : ni l'annonce de sa condamnation, ni la mort de sa mère, ni les paroles du prêtre avant la fin. Comme si, sur cette plage, il avait soudain eu la révélation de l'universelle équivalence du tout et du rien. La conscience de n'être sur la terre qu'en sursis, d'une mort qui, quoi qu'il arrive, arrivera, sans espoir de salut.",
    rating: 5,
    progress: 80,
    startDate: new Date(2022, 5, 10),
    img: require("./assets/letranger.jpg")
  }
  ,
  {
    title: "L'étranger",
    author: "Albert Camus",
    summary: "Condamné à mort, Meursault. Sur une plage algérienne, il a tué un Arabe. À cause du soleil, dira-t-il, parce qu'il faisait chaud. On n'en tirera rien d'autre. Rien ne le fera plus réagir : ni l'annonce de sa condamnation, ni la mort de sa mère, ni les paroles du prêtre avant la fin. Comme si, sur cette plage, il avait soudain eu la révélation de l'universelle équivalence du tout et du rien. La conscience de n'être sur la terre qu'en sursis, d'une mort qui, quoi qu'il arrive, arrivera, sans espoir de salut.",
    rating: 5,
    progress: 80,
    startDate: new Date(2022, 5, 10),
    img: require("./assets/letranger.jpg")
  }
  ,
  {
    title: "L'étranger",
    author: "Albert Camus",
    summary: "Condamné à mort, Meursault. Sur une plage algérienne, il a tué un Arabe. À cause du soleil, dira-t-il, parce qu'il faisait chaud. On n'en tirera rien d'autre. Rien ne le fera plus réagir : ni l'annonce de sa condamnation, ni la mort de sa mère, ni les paroles du prêtre avant la fin. Comme si, sur cette plage, il avait soudain eu la révélation de l'universelle équivalence du tout et du rien. La conscience de n'être sur la terre qu'en sursis, d'une mort qui, quoi qu'il arrive, arrivera, sans espoir de salut.",
    rating: 5,
    progress: 80,
    startDate: new Date(2022, 5, 10),
    img: require("./assets/letranger.jpg")
  }
  ,
  {
    title: "L'étranger",
    author: "Albert Camus",
    summary: "Condamné à mort, Meursault. Sur une plage algérienne, il a tué un Arabe. À cause du soleil, dira-t-il, parce qu'il faisait chaud. On n'en tirera rien d'autre. Rien ne le fera plus réagir : ni l'annonce de sa condamnation, ni la mort de sa mère, ni les paroles du prêtre avant la fin. Comme si, sur cette plage, il avait soudain eu la révélation de l'universelle équivalence du tout et du rien. La conscience de n'être sur la terre qu'en sursis, d'une mort qui, quoi qu'il arrive, arrivera, sans espoir de salut.",
    rating: 5,
    progress: 80,
    startDate: new Date(2022, 5, 10),
    img: require("./assets/letranger.jpg")
  }
  ,
  {
    title: "L'étranger",
    author: "Albert Camus",
    summary: "Condamné à mort, Meursault. Sur une plage algérienne, il a tué un Arabe. À cause du soleil, dira-t-il, parce qu'il faisait chaud. On n'en tirera rien d'autre. Rien ne le fera plus réagir : ni l'annonce de sa condamnation, ni la mort de sa mère, ni les paroles du prêtre avant la fin. Comme si, sur cette plage, il avait soudain eu la révélation de l'universelle équivalence du tout et du rien. La conscience de n'être sur la terre qu'en sursis, d'une mort qui, quoi qu'il arrive, arrivera, sans espoir de salut.",
    rating: 5,
    progress: 80,
    startDate: new Date(2022, 5, 10),
    img: require("./assets/letranger.jpg")
  }
  ,
  {
    title: "L'étranger",
    author: "Albert Camus",
    summary: "Condamné à mort, Meursault. Sur une plage algérienne, il a tué un Arabe. À cause du soleil, dira-t-il, parce qu'il faisait chaud. On n'en tirera rien d'autre. Rien ne le fera plus réagir : ni l'annonce de sa condamnation, ni la mort de sa mère, ni les paroles du prêtre avant la fin. Comme si, sur cette plage, il avait soudain eu la révélation de l'universelle équivalence du tout et du rien. La conscience de n'être sur la terre qu'en sursis, d'une mort qui, quoi qu'il arrive, arrivera, sans espoir de salut.",
    rating: 5,
    progress: 80,
    startDate: new Date(2022, 5, 10),
    img: require("./assets/letranger.jpg")
  }
]


function App() {
  const appStyle = { display: 'flex', flexFlow: 'row wrap' };
  const [books, setBooks] = useState(INIT_BOOK_LIST);

  const addBookHandler =  (book: Book) => {
    setBooks(prevBookList => [book, ...prevBookList])
  }

  return (
    <div style={appStyle}>
      <NewBook onAddBook={addBookHandler} />
      {books.map(book => <BookCard {...book} />)}
    </div>
  );
}

export default App;
