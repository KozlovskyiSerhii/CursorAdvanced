import React, { useState } from 'react';
const comment = './icon/comment.svg';
const download = './icon/download.svg';
const like = './icon/like.svg';
const retweet = './icon/retweet.svg';
import './cards.css';
const img1 = "https://parade.com/.image/t_share/MTk1NjEyNDIwNDA2NzgxMzI1/star-wars-trivia-yoda.jpg";
const img2 = "https://phantom-marca.unidadeditorial.es/3188028f64220b012d208dabe8da7119/resize/1320/f/jpg/assets/multimedia/imagenes/2023/02/01/16752725794661.png";
const img3 = "https://static.giga.de/wp-content/uploads/2019/05/star-wars-darth-vader-rcm1600x1200u.jpg";
const img4 = "https://hips.hearstapps.com/hmg-prod/images/starwars-1603920431.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*";

const Cards = ({ author, date, content, fotos }) => {
  const [count, setCount] = useState(157);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="cards">
      <div className="header">
        <img src={author.photo} alt="Author" className="header-img" />
        <p className="header-info header-text">{author.name}</p>
        <p className="header-info">{author.nickname}</p>
        <p className="header-info">{date}</p>
      </div>
      <div className="info-ray">
        <p className="info-ray-text">{content}</p>
        <img src={fotos} alt="Rey" className="img-rey" />
      </div>
      <div className="footer">
        <div className="footer-block-info">
          <img src={comment} alt="comment" className="footer-img" />
          <p className="number">342</p>
        </div>
        <div className="footer-block-info">
          <img src={retweet} alt="retweet" className="footer-img" />
          <p className="number">345</p>
        </div>
        <div className="footer-block-info">
          <img src={like} alt="like" onClick={handleClick} className="footer-img" />
          <p className="number">{count}</p>
        </div>
        <div className="footer-block-info">
          <img src={download} alt="download" className="footer-img--download" />
        </div>
      </div>
    </div>
  );
};

const PublicationPage = () => {
  const publications = [
    {
      id: 1,
      title: 'Публікація 1',
      content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
      foto : img1,
      author: {
        name: "Anakin Skywalker",
        photo: img1,
        nickname: "@dart_vader"
      },
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      title: 'Публікація 2',
       content: 'WTF? Who is Ray? Why she is Skywalker? Yoda...?',
      foto : img2,
      author: {
        name: "Yoda",
        photo: img2,
        nickname: "@Big-Yoda"
      },
      date: new Date().toLocaleDateString()
    },
    {
      id: 3,
      title: 'Публікація 3',
       content: 'WTF? Who is Ray? Why she is Skywalker? Darth Vader...?',
      foto : img3,
      author: {
        name: "Darth Vader",
        photo: img3,
        nickname: "@Darth_Vader"
      },
      date: new Date().toLocaleDateString()
},
{
id: 4,
title: 'Публікація 4',
   content: 'WTF? Who is Ray? Why she is Skywalker? Mandalorian...?',
foto : img4,
author: {
name: "Mandalorian",
photo: img4,
nickname: "@Mandalorian"
},
date: new Date().toLocaleDateString()
}
];

return (
<div>
{publications.map((publication) => (
<Cards
      key={publication.id}
      fotos={publication.foto}
       author={publication.author}
       date={publication.date}
       content={publication.content}
     />
))}
</div>
);
};

export default PublicationPage;