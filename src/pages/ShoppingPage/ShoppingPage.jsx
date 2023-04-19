import { useState, useRef } from "react";

import "./shoppingPage.scss";

import { Link } from "react-router-dom";
import {
  MdPeopleAlt,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import { itemShoppingPage } from "./itemShoppingPage";
const ShoppingPage = () => {
  const [displayCount, setDisplayCount] = useState(5);
  const handleShowMore = () => {
    if (displayCount < itemShoppingPage.length) {
      setDisplayCount(itemShoppingPage.length);
    } else {
      setDisplayCount(5);
    }
  };
  return (
    <div className="shoppingPage">
      <div className="left-items">
        <div className="left-header">
          <h2>Shopping</h2>
        </div>
        {itemShoppingPage.slice(0, displayCount).map((v, i) => {
          return (
            <Link to={v.itemLink} className="left-wrapItem" key={i}>
              <div className="left-item">
                {/* <{v.itemIcon} className="icon-item" color="#f4506d" /> */}
                {v.itemIcon}
                {v.itemName}
              </div>
            </Link>
          );
        })}
        <div className="left-wrapItem" onClick={handleShowMore}>
          <div className="left-item more-item">
            {displayCount < itemShoppingPage.length ? (
              <>
                <MdKeyboardArrowDown className="icon-item" color="#ccc" />
                Xem thêm
              </>
            ) : (
              <>
                <MdKeyboardArrowUp className="icon-item" color="#ccc" />
                Thu gọn
              </>
            )}
          </div>
        </div>
      </div>
      <div className="right-items">
        <div className="list-items__right">
          <div className="item-right">
            <div className="img-item">
              <img src="../../assets/product/cabinet.jpg" alt="" />
            </div>
            <div className="item-right__content">
              <h2>4.000.000đ</h2>
              <div className="item-product">
                Shop cần bán kệ tủ giá xuất xưỡng .có giao hàng tận nơi
              </div>
              <div className="number-address">Thành Phố Hồ Chí Minh</div>
            </div>
          </div>

          <div className="item-right">
            <div className="img-item">
              <img src="../../assets/product/sandal.jpg" alt="" />
            </div>
            <div className="item-right__content">
              <h2>250.000đ</h2>
              <div className="item-product">Shop Xả Giá Rẻ Cho Chị Em Ạ</div>
              <div className="number-address">Thành Phố Hồ Chí Minh</div>
            </div>
          </div>

          <div className="item-right">
            <div className="img-item">
              <img src="../../assets/product/clothes.jpg" alt="" />
            </div>
            <div className="item-right__content">
              <h2>120.000đ</h2>
              <div className="item-product">Shop A.T bán hàng jeans nam</div>
              <div className="number-address">Thành Phố Hồ Chí Minh</div>
            </div>
          </div>

          <div className="item-right">
            <div className="img-item">
              <img src="../../assets/product/home.jpg" alt="" />
            </div>
            <div className="item-right__content">
              <h2>3.000.000đ</h2>
              <div className="item-product">Trọ Quận 2 giá rẻ</div>
              <div className="number-address">Thành Phố Hồ Chí Minh</div>
            </div>
          </div>

          <div className="item-right">
            <div className="img-item">
              <img src="../../assets/product/shoes.jpg" alt="" />
            </div>
            <div className="item-right__content">
              <h2>899.000đ</h2>
              <div className="item-product">Giày shop cao cấp</div>
              <div className="number-address">Thành Phố Hồ Chí Minh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
