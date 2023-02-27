import React, {createContext, useState} from 'react';
import { createRoot } from 'react-dom/client';
import {Application} from "./Application";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import {SentimentNeutral} from "@mui/icons-material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

export const RatingData = createContext({});

function RatingProvider({children}) {
    const data = [
        {
            id: 1,
            smile: <SentimentVeryDissatisfiedIcon color="primary"/>,
            counter: 0
        },
        {
            id: 2,
            smile:<SentimentNeutral color="primary"/>,
            counter: 0
        },
        {
            id: 3,
            smile:<SentimentSatisfiedIcon color="primary"/>,
            counter: 0
        },
        {
            id: 4,
            smile:<SentimentSatisfiedAltIcon color="primary"/>,
            counter: 0
        },
        {
            id: 5,
            smile:<SentimentSatisfiedAltIcon color="primary"/>,
            counter: 0
        }
    ]

    const [ rating , setRating ] = useState(data);

    return (
        <RatingData.Provider value={{rating, setRating}}>
            {children}
        </RatingData.Provider>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
      <RatingProvider >
          <Application />
      </RatingProvider>
  </React.StrictMode>
);


