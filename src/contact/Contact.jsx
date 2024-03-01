import React from "react";
import "./Contact.css";

function Contact () {
    return(
        <div className="leftside">
            <h1>COMPLAIN/ORDER</h1>
            <div className="form">
            <form id ="contact-form" method= "POST">
                <label htmlFor="nama" className="ContactLabel">Nama Anda</label>
                <input name="name" placeholder="Masukkan Nama Lengkap Anda..." type="text"/>
                <label htmlFor="email" className="ContactLabel">Email Anda</label>
                <input email="email" placeholder="Masukkan Email Anda..." type="email"/>
                <label htmlFor="message" className="ContactLabel">Pesan Anda</label>
                <textarea
                rows="3"
                placeholder="Masukkan Pesan Anda"
                name="message"
                required
                ></textarea>
                <button type="submit" className="ContactLabel">Kirim Pesan</button>
            </form>
            </div>
        </div>
    )
}


export default Contact