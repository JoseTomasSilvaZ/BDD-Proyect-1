import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div>
            <div className='w-2/3'>

            <h1 className='text-white font-bold text-2xl'>Una plataforma transparente</h1>
            <p className=''>
                A través de los años, las criptomonedas y el sistema blockchain ha ido ganando terreno en el internet.
                A raíz de ello, se diversificó su uso hasta los <strong className='text-white'>"Non fungible tokens"</strong>. Los cuales son 
                piezas artísticas o collecionables únicas y con solo un propietario. <br/> <br/>
                
                Decidimos crear una plataforma sencilla e intuitiva donde los usuarios puedan coleccionar, intercambiar, crear y vender Tokens de manera transparente y segura            </p>
            </div>
        </div>

        <div>
            <div className='w-full'>

            <h1 className='text-white font-bold text-2xl'>Modelo Entidad Relación FN3</h1>
            <div className='w-[650px] h-96 bg-base-200 mt-3'>

            <iframe allowFullScreen='true' className='w-full h-full rounded-md' src="https://drawsql.app/teams/tomi-1/diagrams/token-store/embed"></iframe> 
            </div>
            </div>
        </div>

        <div>
            <div className='w-full'>

            <h1 className='text-white font-bold text-2xl'>Queries importantes</h1>
            <p className=''>
                <div className='flex flex-col gap-5 '>

                    <div className='w-full'>
                    <h1 className='text-md font-bold text-white my-3'> Crear una venta</h1>

                        <div className="mockup-code">
                    <pre data-prefix="$">
                        <code>
                             INSERT INTO sales (token_id, seller_id, buyer_id, price) 
  
                        </code></pre>
                        <pre data-prefix='$'>

                        <code>
                              VALUES ($1, $2, $3, $4) RETURNING *',
    [tokenId, sellerId, buyerId, price]
                        </code>
                        </pre>
                        <br/>
                        <pre data-prefix='$'>

                        <code>
                        'UPDATE tokens SET owner_id = $1 WHERE id = $2',
    [buyerId, tokenId],
                        </code>
                        </pre>
                        <br/>
                        <pre data-prefix='$'>

                        <code>
                        'UPDATE coins SET amount = amount - $1 WHERE user_id = $2',
    [price, buyerId],
                        </code>
                        </pre>
                        <br/>
                        <pre data-prefix='$'>

                        <code>
                        'UPDATE coins SET amount = amount + $1 WHERE user_id = $2',
    [price, sellerId],
                        </code>
                        </pre>
                        </div>
                    
                    </div>


                    <div className='w-full'>
                    <h1 className='text-md font-bold text-white my-3'> Crear Token</h1>
                        <div className="mockup-code">
                    <pre data-prefix="$">
                        <code>
                        INSERT INTO tokens (name, owner_id, url, price, onsale, created_by, description)
  
                        </code></pre>
                        <pre data-prefix='$'>

                        <code>
                        VALUES ($1, $2, $3, $4, $5, $2, $6) RETURNING *', [name, ownerId, url, price, onsale, description],
                        </code>
                        </pre>
                        </div>
                    
                    </div>
                    
                    <div className='w-full'>
                    <h1 className='text-md font-bold text-white my-3'> Crear usuario</h1>

                        <div className="mockup-code">
                    <pre data-prefix="$">
                        <code>
                        INSERT INTO users (name, password, email) 
  
                        </code></pre>
                        <pre data-prefix='$'>

                        <code>
                        VALUES ($1, $2, $3) RETURNING *,  [name, hashedPassword, email],
                        </code>
                        </pre>
                        </div>
                    
                    </div>


                    <div className='w-full'>
                    <h1 className='text-md font-bold text-white my-3'> Obtener todos los tokens</h1>

                        <div className="mockup-code">
                    <pre data-prefix="$">
                        <code>
                        select t.id, t.name as token_name, t.url, t.price, t.onsale, t.created_by as creator_id, t.description,
  
                        </code></pre>
                        <pre data-prefix='$'>

                        <code>
                        u.id as owner_id, u.name as owner_name from tokens t join users u on t.owner_id = u.id',                        </code>
                        </pre>

                        
                        </div>
                    
                    </div>

                    <div className='w-full'>
                    <h1 className='text-md font-bold text-white my-3'> Obtener ventas por usuario</h1>

                        <div className="mockup-code">
                    <pre data-prefix="$">
                        <code>
                        SELECT sales.id, buyer.name as buyer_name, seller.name as seller_name, tokens.name as token_name, tokens.id as token_id, sales.price,                        </code></pre>
                        <pre data-prefix='$'>

                        <code>
                        sales.transaction_date FROM sales JOIN users AS buyer ON sales.buyer_id = buyer.id INNER JOIN
                                               </code>
                        </pre>

                        <pre data-prefix='$'>

                        <code>
                        users as seller ON sales.seller_id = seller.id INNER JOIN tokens ON sales.token_id = tokens.id WHERE seller.id = $1',    [id],
                                               </code>
                        </pre>

                        
                        </div>
                    
                    </div>
                    


                </div>
            </p>
            </div>
        </div>
    </div>
  )
}

export default About