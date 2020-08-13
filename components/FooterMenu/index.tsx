import React from 'react'
import { useSelector } from 'react-redux';

const HeaderMenu = () => {
  const footer = useSelector((state: RootState) => state.common.footer);
  let isCurrentLangEng = true;
  return (<footer style={{display:"block"}}>
    <div className="footer-menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-sm-6 col-5 text-center">
            <div className="logo">
              <a href="/">
                <img src="/angular-assets/images/bottomlogo.jpg" alt="no image" />
              </a>
            </div>
          </div>
  
          <div className="col-lg-7 order-lg-2 order-3 col-12">
            <form  >
              <div className="subscribe">
                <div className="input-group">
                    <input 
                    type="email" 
                    className="form-control"/>
  
                  <div className="input-group-append">
                    <button 
                      className="btn btn-secondary subscribe-btn"
                     type="submit">
                     {"გამოწერა"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
  
          <div className="col-lg-3 col-sm-6 order-lg-3 order-2 col-7 numcol">
            <div className="contact ml-2">
              <div className="input-group" style={{width:'180px',margin:0}}>
                <div className="input-group-prepend">
                  <span className=""><i className="fa fa-phone"></i></span>
                </div>
                <p id="number">
                  <a
                    className="a-links"
                    style={{textDecoration:'none'}}
                    href="tel:0322484848"
                    >032 2 48 48 48</a
                  >
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  
{ footer && footer.data && 
    <div className="main-footer d-flex  p-4 d-xs-none faking">
      {footer && footer.data.map((section:any) => (
      <div className="delete-1" >
        <h5>{isCurrentLangEng==true?section.section_title:section.section_title_gr}</h5>
        <ul className="nav flex-column">
          {section && section.pages && section.pages[0].map((p:any) => (
          <li >
            <a >
              { (isCurrentLangEng == true ) ? p.link_title : p.link_title_gr } </a>
          </li>
          )
          )}
        </ul>
      </div>
      )
      )}
    </div>
}
  </footer>);
}

export default HeaderMenu
