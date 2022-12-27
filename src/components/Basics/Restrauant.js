import React from "react"
import "./style.css"
import Menu from './menuApi.js' //importing Menue API which is created with the name of (menuApi.js)
import { useState } from "react"
import MenuCard from "./MenuCard";

const Restrauant = () => {


    const [menuData, setMenuData] = useState(Menu);
    const filterItem = (category) => {
        const upadtedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(upadtedList);
    };

  return (
    <div>

    <nav className="navbar">
        <div className="btn-group">
            <button className="btn-group__item" onClick={ () => filterItem("breakfast")} >Breakfast</button>
            <button className="btn-group__item" onClick={ () => filterItem("lunch")} >Lunch</button>
            <button className="btn-group__item" onClick={ () => filterItem("evening")} >Evening</button>
            <button className="btn-group__item" onClick={ () => filterItem("dinner")} >Dinner</button>
            <button className="btn-group__item" onClick={ () => setMenuData(Menu)}>All</button>
        </div>
    </nav>
    <MenuCard menuData={menuData} />


    </div>
  )
}

export default Restrauant
