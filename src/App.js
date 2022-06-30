import React from 'react'
import Header from './components/Header'
import './Styles/General.css'
import Card from './components/Card'
import Search from './components/Search'

export default function App() {

    const [searchInput, setSearchInput] = React.useState('Snowinee' || '');
    const [profile, setProfile] = React.useState({});

    const search = () => {
        fetch(`https://api.github.com/users/${searchInput}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }

    const updateSearch = (value) => {
        setSearchInput(value)
        search()
    }

    React.useEffect(() => {
        search()
    }, [])

    return (
        <>
            <Header />        
            <main>
                <Search 
                    updateChange={updateSearch}
                />
                <Card 
                    {...profile}
                />
            </main>
        </>
    )
}