import React from "react";
import './About.css';
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
const AboutPage = () => {
    return (
        <div className='about'>
           <h1>KITCHEN KICIK</h1>
           <h3>KAMI ADALAH PERUSAHAAN YANG BERDIRI PADA BIDANG KULINER DENGAN RASA DAN KUALITAS TERBAIK DENGAN HARGA YANG TERJANGKAU UNTUK SEMUA KALANGAN
           </h3>
            <h4>
                <img src="/img/kitchen kicik PP.png" alt="" width={350} />
            </h4>
            <h5> KETUK KAMI UNTUK INFO MENARIK LAINNYA : </h5>
            <h6 className="IconAbout"> 
            <InstagramIcon className="AP1"/>
            <WhatsAppIcon className="AP1"/>
            <EmailIcon className="AP1"/>
            </h6>
            <Link to='/'>
                <button> HOME </button>
            </Link>
            <Link to='/projects'>
                <button> MENU </button>
            </Link>
            <Link to='/contact'>
                <button> CONTACT </button>
            </Link>
            
        </div>
    )
}

export default AboutPage

