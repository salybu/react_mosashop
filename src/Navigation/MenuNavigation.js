import React from "react";
import { Link } from "react-router-dom";

function MenuNavigation(){
    return (
        <div>
            <Link to="/ballcap">볼캡</Link>
            <Link to="/logout">헌팅캡</Link>
            <Link to="/cart">버킷햇</Link>
        </div>
    )
}

export default MenuNavigation;