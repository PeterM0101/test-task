import React, {FC} from 'react';
import Card from "../shared/UI/card/Card";

interface CharacterProps {
    image: string,
    name: string,
    status: string
}

const Character: FC<CharacterProps> = ({image, status, name}) => {
    return (
        <Card className='character'>
            <img src={image} alt='Hero' className='character__image'/>
            <h4>{name}</h4>
            <p>{status}</p>
        </Card>
    );
};

export default Character;