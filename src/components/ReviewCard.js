import React, { Component } from 'react';
import {InfoConsumer } from './context';
import './review.css'

 class ReviewCard extends Component {
    render() {
        const { id, name, avatar, comment} =this.props.person;
        return (
            <div>
                    <div className="media mt-5 bordere">
                        <img 
                        src={avatar}
                        alt={name}
                        style={{width:'40px'}}
                        className='mr-3'
                        />
                        <div className="media-body">
                            <h5 className="mt-0">{name}</h5>
                            <p>{comment}</p>
                        </div>
                    </div>
                    </div>
        )
    }
}

export default ReviewCard;