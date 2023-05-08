import React, { useState } from 'react'

const Section = ({title, desc, isVisible, setIsVisible}) => {
  
  return(
    <div className='border border-pink-400 p-2 m-2'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      { isVisible ? 
        (
          <button className='m-2 p-2' onClick={()=>{
            setIsVisible(false);
         }}>Hide</button>
        ) : (
          <button className='m-2 p-2' onClick={()=>{
            setIsVisible(true);
         }}>Show</button>
        )}
      
        
      {isVisible === true ? <p>{desc}</p> : ""}
    </div>
  )
}

const Instamart = () => {
  const [visibleSec, setVisibleSec] = useState("about");


  return (
    <div>
      <h1 className='text-3xl p-2 m-2 font-bold'>Instamart</h1>
      <Section
       title={"About Instamart"}
       desc={"This is all about InstaMart"}
       isVisible={visibleSec === "about"}
       setIsVisible={()=>{
        setVisibleSec("about")
       }} />

      <Section
       title={"Team Instamart"}
       desc={"This is all Team InstaMart"} 
       isVisible={visibleSec === "team"}
       setIsVisible={()=>{
        setVisibleSec("team")
       }} />

      <Section
       title={"Carrer Instamart"}
       desc={"This is all Carrer InstaMart"}
       isVisible={visibleSec === "carrer"}
       setIsVisible={()=>{
        setVisibleSec("carrer")
       }} />



      {/* <AboutInstamart />
      <DetailsInstamart />
      <TeamInstamart />
      <Product />
      <Career /> */}
    </div>
  )
}

export default Instamart;