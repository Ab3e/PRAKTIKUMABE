import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const HomePage = () => {
    return (
        <div className='home'>
           <h1>KITCHEN KICIK</h1>
           <h3>INI ADALAH CHEF DAN MASAKKAN KAMI</h3>
            <h4 className='h4home'>
                <img src="./imgCHF/PHOTOCHF1.jpg" alt="" />
                <img src="./imgCHF/PHOTOCHF2.jpg" alt="" />
                <img src="./imgCHF/PHOTOCHF3.jpg" alt="" />
                <img src="./imgCHF/PHOTOCHF4.jpg" alt="" />
                <img src="./imgCHF/PHOTOCHF5.jpg" alt="" />
            </h4>
              <h3 className='h3home'>
              <img src="./img/Rendang.jpg" alt="" />
              <img src="./img/Cumii.jpg" alt="" />
              <img src="./img/Siomay.jpg" alt="" />
              <img src="./img/Kerak Telor.jpg" alt="" />
              <img src="./img/Nasi Goreng.jpg" alt="" />
                </h3>
                <h3> 
            <Link to='/about' >
                <ArrowBackIosIcon />
            </Link>
            <Link to='/projects'>
                <ArrowForwardIosIcon />
            </Link>
            </h3>
            <Link to='/projects'>
                <button> ORDER NOW !! </button>
            </Link>
        </div>
    )
}

export default HomePage
