import React from 'react'

const Carroussel = ({tokens}) => {
  const randomTokens = () => {
    const array = Array.from({length:4}, () => Math.floor(Math.random() * tokens.length))
    const newArray = array.map(number => tokens[number])
    return newArray
  }
  return (
   <>
       <div className="carousel w-full">
   {
    randomTokens().map((token, index) => {
        return (
            
  <div id={`item${index+1}`}  key={token.token_name} className="carousel-item w-full">
    <div className='flex flex-col  w-full'>
    <img src={token.url} className="w-[350px] h-[350px] object-cover rounded-md " />
    <div className='mt-2'>
        
            <h3 className='text-md text-white font-bold'>{token.token_name}</h3>
            <p className='text-sm'>@{token.owner_name}</p>
            </div>
    </div>
  </div> 
        )
    })
   }
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
   </>
  )
}

export default Carroussel