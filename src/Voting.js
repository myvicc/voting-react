import React, { useContext } from "react";
import { Container, FormControl, Stack} from "@mui/material";
import {RatingData} from "./index";


export function Voting() {
    const { rating, setRating } = useContext(RatingData);

    return (
        <Container>
            {
                rating.map(({smile, counter, id}) => {
                    return (
                        <FormControl key={id}>
                            <Stack spacing={2}>
                                <span onClick={() => {
                                    setRating((prevState) => {
                                        return prevState.map((item) => {
                                            if (item.id === id) {
                                                return {
                                                    id,
                                                    smile,
                                                    counter: counter + 1
                                                };
                                            }
                                            return item;
                                        });
                                    });
                                }}>{smile}</span>
                                <span>{counter}</span>
                            </Stack>
                        </FormControl>
                    )
                })
            }
        </Container>
    )
}