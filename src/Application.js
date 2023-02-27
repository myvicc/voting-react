import React, {useContext} from "react";
import {Voting} from "./Voting";
import BasicModal from "./ButtonResults";
import Box from "@mui/material/Box";
import {RatingData} from "./index";

export const Application = () => {
    const { rating } = useContext(RatingData);

    console.log(rating);
    return (
        <Box>
            <Voting />
            <BasicModal counter={rating} />
        </Box>
    )
}

