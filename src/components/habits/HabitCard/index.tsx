import React from 'react';

interface HabitCardProps {
    name: string
    imageUrl?: string
}

const HabitCard: React.FC<HabitCardProps> = ({ name, imageUrl }) => {
    return (
        <>
            <p>{name}</p>
        </>
    )
}

export default HabitCard;