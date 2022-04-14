import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className='notes__content'>
            
            <input 
                type='text'
                placeholder='Some awesome title'
                className='notes__title-input'
                autoComplete='off'
            />

            <textarea
                placeholder='what happend today'
                className='notes__textarea'
            >
            </textarea>

            <div className='notes__image'>
                <img 
                    src='https://images.squarespace-cdn.com/content/v1/5533416be4b062ec58109dbe/1497571001289-PHL5CJSSBVT7R4OENZY1/pixel-lab.gif?format=500w'
                    alt='imagen'
                />
            </div>

        </div>
    </div>  
  )
}
