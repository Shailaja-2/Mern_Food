import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p className="text-gray-600">
            Discover our handpicked selection of dishes that our guests love the most.
            Freshly made, beautifully served, and bursting with flavor!
          </p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
  <img src={element.image} alt={element.title} />
  <h3>{element.title}</h3>
  <p className="desc">{element.description}</p>
  <div className="card-footer">
    <button className="category">{element.category}</button>
    <span className="price">${element.price}</span>
  </div>
</div>

                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
