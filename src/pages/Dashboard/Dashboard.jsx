import React from 'react'
import './dashboard.scss'

const Dashboard = ({productos,isFetching}) => {
   
    return (
        <div>
           
           <section className='container-cards'>
                {
                productos && productos.length>0 &&  productos.map((element)=>(
                        <div key={element.id} className='card'>
                            <h3>{element.nombre}</h3>
                            <img src={element.foto} alt="fotoback"/>
                            <div>
                                <p>${element.precio}</p>
                                <p>{element.descripcion}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
             {isFetching && <div className="modalLoading"></div>}
        </div>
    )
}

export default Dashboard;