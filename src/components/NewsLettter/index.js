import React from 'react'
import { Button } from 'react-bootstrap'
// import { NewsIcon } from '../../images'

const NewsLetter = ({ t }) => {
    return (
        <div className="newsLetter">
            <h2 className="newsletterHeading">{t('home.email_newsletter')}</h2>
            <input type="text" className="emailInput mt-4" placeholder="Email Address" />
            <div className="text-end">
                <Button variant='custom' className="Btn mt-4">{t('home.submit')}</Button>{' '}
            </div>
        </div>
    )
}

export default NewsLetter