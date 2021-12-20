import React, { useRef } from 'react'
import './dashboard.scss'

const Dashboard = ({productos,isFetching,onClick}) => {
   const imagen = useRef(null)
    return (
        <div>
           
           <section className='container-cards'>
                {
                productos && productos.length>0 &&  productos.map((element)=>(
                        <div key={element.id} className='card'>
                            <h3>{element.nombre}</h3>
                            <img  ref={imagen} className="dashboard-img" src={`${process.env.REACT_APP_API_URL}${element.foto}`} alt="fotoback"/>
                            <div>
                                <p>${element.precio}</p>
                                <p>{element.descripcion}</p>
                            </div>
                            <button id={element.id} className='dashboard-button' onClick={(e)=>onClick(e.target.id,imagen)}>Comprar</button>
                        </div>
                    ))
                }
            </section>
             {isFetching && <div className="modalLoading"></div>}
        </div>
    )
}

export default Dashboard;