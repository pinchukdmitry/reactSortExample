import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Body from './Modules/Body/Body'
import Select from './Modules/Select/Select'
import { data } from '../src/assets/data'

function sortPrice(val, type) {
    switch (type) {
        case 'Up':
            return val.sort((a, b) => a.productPrice - b.productPrice)
        case 'Down':
            return val.sort((a, b) => b.productPrice - a.productPrice)
        case 'timeUp':
            return val.sort((a, b) => new Date(b.productCreateDate) - new Date(a.productCreateDate))
        case 'timeDown':
            return val.sort((a, b) => new Date(a.productCreateDate) - new Date(b.productCreateDate))
    }
}

function App() {
    const [type, setType] = useState('Down')

    function getSelectorValue() {
        var e = document.getElementById('sortSelector')
        var value = e.value

        switch (value) {
            case 'Down':
                return setType('Up')
            case 'Up':
                return setType('Down')
            case 'timeUp':
                return setType('timeUp')
            case 'timeDown':
                return setType('timeDown')
        }
    }

    return (
        <>
            <Select onChange={() => getSelectorValue()}></Select>
            <Body sortProducts={sortPrice(data, type)}></Body>
        </>
    )
}

export default App
