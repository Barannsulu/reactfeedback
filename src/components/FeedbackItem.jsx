import React from 'react'
import { FaTimes , FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {

    const {deleteFeedback , editFeedback} = useContext (FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={ () => deleteFeedback(item.id) } className='close'>
                <FaTimes color='purple'> </FaTimes>
            </button>
            <button className='edit'>
                <FaEdit onClick={() => {editFeedback(item)}} color='purple'> </FaEdit>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired , 
}


export default FeedbackItem
