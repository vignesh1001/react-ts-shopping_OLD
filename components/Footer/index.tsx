import React from 'react'
const Footer = () => {
  return (
    <footer>
        <div className="social-icons d-lg-none d-md-none d-sm-none">
             <a href="https://www.facebook.com/ElitElectronics" target="_blank"><i className="fa fa-facebook-square"></i></a>
             <a href="https://www.youtube.com/c/EeGeElitElectronics" target="_blank"><i className="fa fa-youtube-square"></i></a>
             <a href="https://www.instagram.com/elit_electronics/" target="_blank"><i className="fa fa-instagram"></i></a>
             
            </div>
       <div className="copyright">
        <p className="bizumaFooter">
         {"copyright" } <a href="https://www.bizuma.com/" target="_blank">{"შექმნილია @bizuma-ს მიერ" }</a>
        </p>
      </div>
      <div className="social-icons d-xs-none">
        <a href="https://www.facebook.com/ElitElectronics" target="_blank"><i className="fa fa-facebook-square"></i></a>
        <a href="https://www.youtube.com/c/EeGeElitElectronics" target="_blank"><i className="fa fa-youtube-square"></i></a>
        <a href="https://www.instagram.com/elit_electronics/" target="_blank"><i className="fa fa-instagram"></i></a>
        
        </div>
    </footer>);
}

export default Footer;
