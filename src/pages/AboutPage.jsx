import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About this Project</h1>
                <p>This is a React app to leave feedback for a product or service</p>
                <p>Version:1.0</p>

                <p>
                   <Link to='/'>Back TO Home</Link>
                </p>
            </div>

            
        </Card>
    )
}

export default AboutPage
