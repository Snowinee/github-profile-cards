import React from 'react'
import '../Styles/Card.css'

export default function Card(props) {
    return (
        <section className='card'>
            {props.avatar_url && <img className='profileImage' src={props.avatar_url}/>}
            <div className='profileContent'>
                {props.name && <a href={props.html_url} target="_blank" className='author'>{props.name}</a>}
               {props.blog && <p className='bio'>{props.bio}</p>}
                <div className='stats'>
                    <p>Followers: {props.followers}</p>
                    <p>Following: {props.following}</p>
                    <p>Repos: {props.public_repos}</p>
                </div>
            </div>
        </section>
    )
}