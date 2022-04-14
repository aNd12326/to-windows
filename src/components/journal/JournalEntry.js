import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://advertify.ca/wp-content/plugins/contact-form-by-supsystic/assets/forms/img/bg/bg_support_form.jpg)'
                }}
            ></div>

            <div className='journal__entry-body'>
                <p className='jounal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='jounal__entry-content'>
                    simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
