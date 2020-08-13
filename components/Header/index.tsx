import React from 'react'
const Header = () => {
  let translate = "demo";
  let cartQuantity = 0;
  return (<header className="p-3 d-xs-none">
  <div className="inner-content">
    <div className="logo">
      <a href="/" >
        <img  height="50" src="/images/mainlogo.png" alt="no image" /></a>
    </div>

    <div className="search">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="What are you looking for" 
          id="keyword"
           />
        <div className="input-group-append">
          <button className="btn btn-secondary search-btn" type="button" >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>     

    </div>

    <div className="geo">
      <p className="mb-0">
          <a className="languageAnchor" >
            <span>geo</span>
          </a> |
          <a 
            className="languageAnchor"
          >
            <span>eng</span>
          </a>
      </p>        
    </div>

    <div className="buttons">
      <button  className="btn-register mb-2 mr-4" >
        {`Registration`}
      </button>
      <button  className="btn-register mb-2 mr-4" >
      {`Login`}
      </button>
      <button  className="btn-cart">
        <i className="cart"> 
          <span className="cart-count">
            { cartQuantity>0?cartQuantity:0 }</span> 
          <img src="/images/cart.png" alt=""/>
        </i>
      </button>
    </div>

  </div>
</header>);
}

export default Header
