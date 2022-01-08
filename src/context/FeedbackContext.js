import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
    
    const [feedback, setFeedback] = useState([
        {
            id: 1 ,
            text: 'This is from feedbackcontext', 
            rating: 10,
        },
        
        {
            id: 2 ,
            text: 'This is from feedbackcontext 2', 
            rating: 9,
        }, 
        
        {
            id: 3 ,
            text: 'This is from feedbackcontext 3', 
            rating: 7,
        },
    ])

    const [feedbackEdit, setFeedbackEdit ] = useState({
        item: {}, 
        edit: false 
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?'))
        setFeedback(feedback.filter((item) => item.id !== id))

    }

    const updateFeedback = (id , updItem) => {
        setFeedback(
           feedback.map((item) => (item.id === id ? {...item , ...updItem} : item))
       )
    }


    const feedbackedit = (item) => {

    }

    //Edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item, 
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback, 
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
       {children}
   </FeedbackContext.Provider>
}

export default FeedbackContext