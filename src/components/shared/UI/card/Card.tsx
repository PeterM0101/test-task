import React, { DetailsHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';

interface CardProps extends DetailsHTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    className?: string
}

const Card: FC<CardProps> = (
    {
        children,
        className
    }) => {
    return (
        <div className={cn('card', className)}>
            {children}
        </div>
    )
}

export default Card