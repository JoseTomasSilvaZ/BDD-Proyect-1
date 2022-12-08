import React, {useContext} from 'react'
import { UserContext } from '../../Context/Context'
import {toast} from 'react-toastify'

const Modal = ({tokenData}) => {
  console.log(tokenData, 'tkmodal')
  const {userData, setUserData} = useContext(UserContext)
  const notify =( )=> {
    toast('🦧✨ Compra hecha con exito, encuentra tu nuevo Token en tu perfil!', {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar:true,
        theme:'dark'
    })
}
  console.log(userData)
  const createSale = async() => {
    const req = await fetch('http://localhost:5000/api/sales', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {

        tokenId:tokenData.id,
        sellerId: tokenData.owner_id,
        buyerId: userData.id,
        price: tokenData.price
      }
    )
    })
    const response = await req.json()

    const reqUser = await  fetch(`http://localhost:5000/api/users/${userData.id}`)
    const resUser = await reqUser.json()
    setUserData(prevData => ({...prevData, amount:resUser[0].amount}))
    notify()
    console.log(response)
  }
  return (
    <div>
       { tokenData.owner_id === userData.id && <label htmlFor="my-modal-4" className="btn btn-primary btn-sm w-full" disabled>Comprar token</label>}
       { !(tokenData.owner_id === userData.id) && <label htmlFor="my-modal-4" className="btn btn-primary btn-sm w-full" >Comprar token</label>}

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
    <h3 className="text-lg font-bold text-white mb-4">Comprar token '{tokenData.name}'</h3>
    <div className='flex flex-col items-center gap-2'>
    <div>

    <img src={tokenData.url} className='w-[200px] h-[200px] object-cover rounded-md'/>
    <h1 className='font-bold text-white  text-center mt-1'> {tokenData.token_name}</h1>
    </div>
    <div>

    <p className="text-sm">Estás a punto de comprar el token: <strong className='text-white'>'{tokenData.name}' </strong>por <strong className='text-white'>{tokenData.price} 🍌</strong></p>
    </div>
    <button className='btn btn-primary btn-sm mt-3 w-full ' onClick = {() => createSale()}>Efectuar la compra</button>
    </div>
  </label>
</label>
    </div>  
  )
}

export default Modal