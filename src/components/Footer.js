import React from 'react';
import { Footer } from 'flowbite-react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import "../css/Footercss.css";

function Footerdark() {
    return (
        <Footer container id="all">
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        id="footer-logo"
                        href="/"
                        src="/img/logo-no-background.svg"
                        alt="Logo"
                        name=""
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#" id="footer-link">About</Footer.Link>
                        <Footer.Link href="#" id="footer-link">Privacy Policy</Footer.Link>
                        <Footer.Link href="#" id="footer-link">Licensing</Footer.Link>
                        <Footer.Link href="#" id="footer-link">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Copyright href="#" by="Kitchen-Master™" year={2023} />
                    <FaFacebook id="fb"/>
                    <IoLogoWhatsapp id="wtsp"/>
                    <FaYoutube id="ytb"/>
                </div>
            </div>
        </Footer>
    );
}

export default Footerdark;