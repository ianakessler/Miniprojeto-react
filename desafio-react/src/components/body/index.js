import { useState } from 'react'
import './body.css'

const Body = () => {

    const [contador, setContador] = useState([])
    const [undid, setUndid] = useState([])

    const clicou = (props) => {
        console.log(props)

        const ponto = {

            clientX: props.clientX,
            clientY: props.clientY

        }

        setContador((prev) => [...prev, ponto])
        setUndid([])
    }

    const desfazer = (props) => {
        props.stopPropagation()

        if (contador.length === 0) {
            return;
        }

        const ultimoItemDaLista = contador[contador.length - 1]
        setUndid((prev) => [...prev, ultimoItemDaLista])

        setContador((prev) => {
            const newArr = [...prev].slice(0, -1)
            return newArr
        })
    }

    const refazer = (props) => {
        props.stopPropagation()

        if(undid.length === 0){
            return;
        }

        const ultimoItemDaLista = undid[undid.length - 1]
        setUndid((prev) => {
            const newArr = [...prev].slice(0, -1)
            return newArr
        })
        setContador((prev) => [...prev, ultimoItemDaLista])

    }

    return (

        <div className="screen" onClick={clicou}>

            <button onClick={desfazer}>Desfazer</button>

            <button onClick={refazer}>Refazer</button>


            {contador.map((item) => <span key={item.clientX} style={{ top: item.clientY, left: item.clientX }} />)}

        </div>
    )
}

export default Body