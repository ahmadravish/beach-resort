import React from 'react'
import {useContext} from "react";
import {RoomContext} from "../context"
import Title from "../components/Title"

const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context=useContext(RoomContext);
    const{handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=context;
  let types=getUnique(rooms,'type')
  types=['all',...types]
  types=types.map((item,index)=>{
      return <option value={item} key={index}>{item}</option>
  })
  
let people=getUnique(rooms,'capacity')
people=people.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
})
    return (
        <section className="filter-container">
          <Title title="search rooms" />
          <form className="filter-form">
              {/*room type */}
            <div className="form-group">
              <label htmlFor="type">room type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                   {types}
                </select>
            </div>
            {/*end room type */}

            {/*no of guests */}
            <div className="form-group">
              <label htmlFor="capacity">Guests</label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                   {people}
                </select>
            </div>
            {/*end no of guests */}

            {/*price range*/}
             <div className="form-group">
              <label htmlFor="Price">room price ${price}</label>
                <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} className="form-control" onChange={handleChange} />
            </div>
            {/*end od price range*/}

            {/*size*/}
             <div className="form-group">
               <label htmlFor="size">room size</label>
               <div className="size-inputs">
                 <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                 <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
               </div>
             </div>
            {/*end-of-size*/}
             
            {/*extras*/}
            <div className="form-group">
               <div className="single-extra">
                 <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                 <label htmlFor="breakfast">breakfast</label>
               </div>
               <div className="single-extra">
                 <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                 <label htmlFor="pets">pets</label>
               </div>
             </div>
            {/*end of extras*/}
          </form>
        </section>
    )
}