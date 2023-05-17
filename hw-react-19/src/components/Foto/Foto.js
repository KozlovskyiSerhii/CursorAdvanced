import React from 'react';

import './foto.css'

const PhotoPage = () => {
   const photos = [
      {
         id: 1,
         imageUrl: "https://w7.pngwing.com/pngs/569/958/png-transparent-superman-superman-dc-rebirth-dc-comics-the-new-52-comic-book-superman-comics-heroes-superhero-thumbnail.png",
      },
      {
         id: 2,
         imageUrl: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2013/11/05-Dick-Grayson.jpg",
      },
      {
         id: 3,
         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8tQxelafe1-sOB-W2hoU31ZvqQG7jS9G2g&usqp=CAU",
      },
      {
         id: 4,
         imageUrl: "https://i.insider.com/54c2732deab8ea0f5b9e2904?width=1136&format=jpeg",
      },
      {
         id: 5,
         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqTfwkrTrIDDAFX93mDLEp-tgDuPCYA83mUmD76DuAI5C_vPqcD_PPneUqF8IrArAlgQ&usqp=CAU",
      },
      {
         id: 6,
         imageUrl: "https://www.writeups.org/wp-content/uploads/Karate-Kid-DC-Comics-Post-Reboot-LSH-Legion-Super-Heroes.jpg",
      },
      {
         id: 7,
         imageUrl: "https://shop.capstonepub.com/assets/1/14/DimRegular/9781515878056.jpg",
      },
      {
         id: 8,
         imageUrl: "https://i.insider.com/589bfcac8275e81e008b4a82?width=1000&format=jpeg&auto=webp",
      },
   ];

   return (
      <div>
         <div className="photo-gallery">
            {photos.map((photo) => (
               <PhotoCard key={photo.id} imageUrl={photo.imageUrl} />
            ))}
         </div>
      </div>
   );
};

const PhotoCard = ({ imageUrl }) => (
   <div className="photo-card">
      <img className='photo-card-img' src={imageUrl} alt="Фотографія" />
      <p className='photo-card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta voluptatum fugiat nostrum possimus quo officia minus eum, aut quas placeat autem omnis ut sint, magni repudiandae hic, quibusdam neque?</p>
      </div>
);

export default PhotoPage;