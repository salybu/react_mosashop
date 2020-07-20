import React from "react";
import { Link } from "react-router-dom";
import "./TopNavigation.css"

function TopNavigation(){
    return (
        <div className="topbar">
            <Link to="/" id="topbar__logo">mosashop</Link>
            <div className="mypage">
                <Link to=""></Link>
                <Link to="/logout">로그아웃</Link>
                <Link to="/cart">장바구니</Link>
                <Link to="/mypage">주문조회</Link>
            </div>
        </div>
    )
}

export default TopNavigation;