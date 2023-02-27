import React, {useContext} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {RatingData} from "./index";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const { rating } = useContext(RatingData);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let winObj = rating.reduce((acc, curr) => acc.counter > curr.counter ? acc : curr, 0);

    return (
        <div>
            <Button onClick={handleOpen}>Show results</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Smile Wins
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {winObj.smile} {`wins with score ${winObj.counter}`}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}