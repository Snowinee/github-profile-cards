import React from 'react'
import '../Styles/Search.css'

export default function Search(props) {

    const updateChange = (event) => {
        props.updateChange(event.target.value)
    }

    return (
        <section className='search'>
            <div className='searchHeader'> 
                <input onChange={updateChange} type='text' placeholder='Search User'/>
            </div>
        </section>
    )
}