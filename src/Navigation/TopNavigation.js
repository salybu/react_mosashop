import React from "react";
import { Link } from "react-router-dom";
import "../CSS/topbar.css"

function TopNavigation(){
    return (
        <div className="topbar">
            <Link to="/" id="topbar__logo">mosashop</Link>
            <Link to=""></Link>
            <Link to="/logout" className="topbar__mypage">로그아웃</Link>
            <Link to="/cart" className="topbar__mypage">장바구니</Link>
            <Link to="/mypage" className="topbar__mypage">주문조회</Link>
        </div>
    )
}

export default TopNavigation;