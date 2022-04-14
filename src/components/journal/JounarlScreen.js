import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
// import { NothingSelected } from './NothingSelected'
import { Sidebard } from './Sidebard'

export const JounarlScreen = () => {
  return (
    <div className='journal__main-content'>
        <Sidebard />
        
        <main>
          {/* <NothingSelected /> */}
          <NoteScreen />
        </main>
    </div>
  )
}
