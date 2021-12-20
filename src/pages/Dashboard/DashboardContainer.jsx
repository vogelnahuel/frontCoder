import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard';
import app from '../../hooks/api'

const DashboardContainer = (props) => {
    const [isFetching, setisFetching] = useState(true)
    const [productos, setProductos] = useState([])

    const productosGet = async () => {
        const rta = await app.get('/api/productos')
            .then(respuesta =>respuesta.data)
        setProductos(rta);
        setisFetching(false);
    }

    useEffect(() => {
        productosGet();
    }, []);

    return (
        <Dashboard {...props} productos={productos} isFetching={isFetching} />
    )
}
export default DashboardContainer;
