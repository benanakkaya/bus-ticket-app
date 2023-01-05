import React from 'react'
import { FormattedMessage } from 'react-intl';

function Footer() {
    return (
        <footer className='bg-primary border-t border-secondary'>
            <div className='container' >
                <div className='footer-top flex justify-between items-center py-3 px-6'>
                    <a href='#/' className='text-4xl text-secondary'>Biletcim</a>
                    <div className='footer-social-media flex justify-between gap-x-10'>
                        <h6><FormattedMessage id="followUs" />:</h6>
                        <ul className='flex gap-x-5'>
                            <li><a href='#/'><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href='#/'><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href='#/'><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href='#/'><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href='#/'><i className="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='footer-top flex justify-between items-center py-3 px-6'>
                    <div>
                        <a href='#/'><FormattedMessage id="busTicket" /></a>
                        <ul className='text-sm font-thin '>
                            <li><a href='#/'><FormattedMessage id="footerA1" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA2" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA3" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA4" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA5" /></a></li>
                        </ul>
                    </div>
                    <div>
                        <a href='#/'><FormattedMessage id="busTicket" /></a>
                        <ul className='text-sm font-thin '>
                            <li><a href='#/'><FormattedMessage id="footerA1" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA2" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA3" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA4" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA5" /></a></li>
                        </ul>
                    </div>
                    <div>
                        <a href='#/'><FormattedMessage id="busTicket" /></a>
                        <ul className='text-sm font-thin '>
                            <li><a href='#/'><FormattedMessage id="footerA1" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA2" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA3" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA4" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA5" /></a></li>
                        </ul>
                    </div>
                    <div>
                        <a href='#/'><FormattedMessage id="busTicket" /></a>
                        <ul className='text-sm font-thin '>
                            <li><a href='#/'><FormattedMessage id="footerA1" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA2" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA3" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA4" /></a></li>
                            <li><a href='#/'><FormattedMessage id="footerA5" /></a></li>
                        </ul>
                    </div>

                </div>

                <div className='font-thin text-xs text-center mt-4 mb-4'><FormattedMessage id="footerCopyright" /></div>
            </div>
        </footer>
    )
}


export default Footer;
