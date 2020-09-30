import React from 'react'

const CharacterItem = ({ item }) => {
    return (
    <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
                <img src={item.img} alt='' />
            </div>
            <div className='card-back'>
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <strong>Actor Name:</strong> {item.portrayed}
                    </li>
                    <li>
                        <strong>Nickname:</strong> {item.nickname}
                    </li>
                    <li>
                        <strong>Category:</strong> {item.category}
                    </li>
                    <li>
                        <strong>Appearance:</strong> {item.appearance}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )}

export default CharacterItem
