import './App.css';
import Video from '../Video';
import { useEffect, useState } from 'react';
import db from '../Firebase';

function App() {
   const [reels, setReels] = useState([]);

   useEffect(() => {
      db.collection("reels")
         .onSnapshot(snapshot => (
            setReels(snapshot.docs.map(doc => ({
               id: doc.id,
               reel: doc.data()
            })))
         ))
   }, [reels]);
   
   return (
      <div className="app">
         <div className="app__top">
            <img 
               className="app__logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" 
               alt="Instagram"
            />
            <h1>Reels</h1>
         </div>
         <div className="app__videos">
            {reels.map(({id, reel: {channel, url, avatarSrc, song, likes, shares}}) => (
               <Video 
                  key={id}
                  channel={channel}
                  url={url}
                  avatarSrc={avatarSrc}
                  song={song}
                  likes={likes}
                  shares={shares}
               />
            ))}
         </div>
      </div>
   );
}

export default App;
