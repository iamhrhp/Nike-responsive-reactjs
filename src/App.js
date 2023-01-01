import { Box, Button, Modal, Typography } from '@mui/material';
import './App.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import main from './img/main.png';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="main">
      <Box position="static" className="banner">
        <Box className="icon">
          <img src="https://freepngimg.com/thumb/nike_logo/3-2-nike-logo-png.png" />
        </Box>
        <Box className="option">
          <Button>Men</Button>
          <Button>Women</Button>
          <Button>KIds</Button>
          <Button>Customize</Button>
          <Button>Favorites</Button>
        </Box>
        <Box className="mobile">
          <Button onClick={handleOpen}>
            <MenuIcon />
          </Button>
        </Box>

        <Box className="cart">
          <Button>
            <LocalMallIcon />
          </Button>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal">
          <Button>Men</Button>
          <Button>Women</Button>
          <Button>Kids</Button>
          <Button>Customize</Button>
          <Button>Favorites</Button>
        </Box>
      </Modal>
      <Box className="card">
        <Box>
          <Typography id="title">
            Nike
            <br /> Blazer <br />
            Mid
          </Typography>
          <Typography id="bag-btn">
            Add to Bag
            <Button>
              <LocalMallIcon />
            </Button>
          </Typography>
        </Box>
        {/* <Box className="card-img"> */}
        <img className="card-img" src={main} />
        {/* </Box> */}
      </Box>
      <Box className="scroll">
        <Box id="card">
          <Box>
            <img
              id="list-img"
              src="https://static.nike.com/a/images/t_default/62b77f15-1b4c-4896-9efa-e48fd39dbf8f/custom-nike-air-force-1-high-by-you-shoes.png"
            />
          </Box>
          <Typography>Jordan 1 Mid</Typography>
          <Typography target="shop">Shop Now +</Typography>
        </Box>
        {/* 2nd card___ */}
        <Box id="card">
          <Box>
            <img
              id="list-img"
              src="https://static.nike.com/a/images/t_default/da1668ca-6dc5-4c00-879e-77f8b9587e67/air-force-1-07-shoe-NMmm1B.png"
            />
          </Box>
          <Typography>Air Force</Typography>
          <Typography target="shop">Shop Now +</Typography>
        </Box>
        {/* 3rd card________ */}
        <Box id="card">
          <Box>
            <img
              id="list-img"
              src="https://static.nike.com/a/images/t_default/57dd56da-b069-4c63-bece-4810c1067215/air-zoom-pegasus-39-road-running-shoes-kmZSD6.png"
            />
          </Box>
          <Typography> Huarache Crater</Typography>
          <Typography target="shop">Shop Now +</Typography>
        </Box>
        {/* 4th card________ */}
        <Box id="card">
          <Box>
            <img
              id="list-img"
              src="https://static.nike.com/a/images/t_default/bdd369b0-4469-4d3b-8925-af39faede5a3/jordan-delta-3-mid-shoes-WwnTQl.png"
            />
          </Box>
          <Typography>Jordan Delta 3</Typography>
          <Typography target="shop">Shop Now +</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
