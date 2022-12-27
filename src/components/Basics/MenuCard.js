import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <div>
            <section className="main-card--cointainer">
            {menuData.map((curElem) => {
                return ( 

                    <div>
                        <div className="card-container" key={curElem.id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle" name="number">
                                        {curElem.id}
                                    </span>
                                    <span className="card-author subtle" style={{ color: "#aaa" } }  name="type of food">Breakfast</span>
                                    <h2 className="card-title"  name="Food Name">{curElem.name}</h2>
                                    <span className="card-discription subtle">{curElem.description}
                                    </span>
                                    <div className="card-read subtle">read</div>
                                </div>
                                <img src={curElem.image} alt="imges" className="card-media"></img>     
                                <span className="card-tag subtle">Order Now</span>
                            </div>
                        </div>

                    </div>

                )
            })}

            </section>



        </div>
    )
}

export default MenuCard
