import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';

const HeaderMenu = () => {
  const headerMenu = useSelector((state: RootState) => state.common.topCategories);
  const chunk1 = (arr: Array<any>, start_index:number, length:number) => {
    var newArr: Array<any> = [];
    if (arr.length > 0 && arr.length > start_index) {
      arr.forEach((element, index) => {
        if (index >= start_index && index <= length) {
          newArr.push(element);
        }
      });
    }
    return newArr;

  }
  return (<nav className="d-xs-none">
  <div className="inner-content">
    <div className="toggle-Icon ">
      <button id="toggle" >
        <i className="fa fa-bars"></i>
      </button>
    </div>
  
    <ul className="unexpanded">
        <div className="geo d-lg-none d-md-none d-sm-none white_back p-2">
          <span className="txt-red">: </span>
          <span className="mb-0">
              <a 
                className="languageAnchor"
              >
                <span>
                  geo
                </span>
              </a> |
              <a 
                className="languageAnchor"
              >
                <span>eng</span>
              </a>
          </span>        
        </div>
        { headerMenu && headerMenu.data && headerMenu.data.map( (menu: any) =>
      <li 
          className="nav-item dropdown list-item-group" 
          >
            <Link
          href={`/${menu.category_slug}`} >
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            >
            <span>{menu.category_name}</span>
          </a>
          </Link>
          <div className="dropdown-content" >
            <div className="container-fluid" >
              <div className="row" >
                {menu.sub_category?.length > 0 &&
                <div className="col-3 mt-3 mb-3">
                    <div >
                      {
                        chunk1(menu.sub_category,0,9).map((data)=><Link href={`/${menu.category_slug}/${data.category_slug}`}><a>{data.category_name}</a></Link>)

                      }
                    </div>
                </div>
                }
                {menu.sub_category?.length > 10 &&
                <div className="col-3 mt-3 mb-3">
                  <div >
                    {
                        chunk1(menu.sub_category,10,19).map((data)=><Link href={`/${menu.category_slug}/${data.category_slug}`}><a>{data.category_name}</a></Link>)
                    }
                  </div>
                </div>
                }
                {menu.sub_category?.length > 20 &&
                <div className="col-3 mt-3 mb-3">
                  <div >
                    {
                        chunk1(menu.sub_category,20,29).map((data)=><Link href={`/${menu.category_slug}/${data.category_slug}`}><a>{data.category_name}</a></Link>)
                    }
                  </div>
                </div>
                }
                {menu.sub_category?.length > 30 &&
                <div className="col-3 mt-3 mb-3">
                    <div >
                    {
                        chunk1(menu.sub_category,30,39).map((data)=><Link href={`/${menu.category_slug}/${data.category_slug}`}><a>{data.category_name}</a></Link>)
                    }
                  </div>
                </div>
                }
              </div>
              </div>
            </div>    
      </li>
        )}
      <li className="nav-item dropdown list-item-group">
        <a 
          className="nav-link" 
          > <span>Sales</span>
        </a>
      </li>
      <li className="nav-item dropdown list-item-group" >
        <a 
          className="nav-link" 
            ><span>Saved <i className="fa fa-heart-o"></i></span>
        </a>
      </li>
    </ul>
  </div>
  </nav>);
}

export default HeaderMenu
