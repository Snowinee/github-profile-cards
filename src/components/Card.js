import React from 'react'
import '../Styles/Card.css'

export default function Card(props) {
    const bioContent = () => {
        if (!props.bio) {
            return 'Empty Bio :('
        }
        else {
            return props.bio
        }
    }
    return (
        <section className='card'>
            {props.avatar_url && <img className='profileImage' alt='' src={props.avatar_url}/>}
            <div className='profileContent'>
                {props.name && <a href={props.html_url} target="_blank" rel="noreferrer" className='author'>{props.name}</a>}
               <p className='bio'>{bioContent()}</p>
                <div className='stats'>
                    <p>Followers: {props.followers}</p>
                    <p>Following: {props.following}</p>
                    <p>Repos: {props.public_repos}</p>
                </div>
                {console.log(bioContent())}
            </div>
        </section>
    )
}