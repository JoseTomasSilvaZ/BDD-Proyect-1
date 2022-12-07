import React from 'react'

const Modal = ({tokenData}) => {
  return (
    <div>
        <label htmlFor="my-modal-4" className="btn btn-primary btn-sm w-full">Comprar token</label>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
    <h3 className="text-lg font-bold text-white mb-4">Comprar token '{tokenData.token_name}'</h3>
    <div className='flex flex-col items-center gap-2'>
    <div>

    <img src={tokenData.url} className='w-[200px] h-[200px] object-cover rounded-md'/>
    <h1 className='font-bold text-white  text-center mt-1'> {tokenData.token_name}</h1>
    </div>
    <div>

    <p className="text-sm">Estás a punto de comprar el token: <strong className='text-white'>'{tokenData.token_name}' </strong>por <strong className='text-white'>{tokenData.price} 🍌</strong></p>
    </div>
    <button className='btn btn-primary btn-sm mt-3 w-full '>Efectuar la compra</button>
    </div>
  </label>
</label>
    </div>
  )
}

export default Modal