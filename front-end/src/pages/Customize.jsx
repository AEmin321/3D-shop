import React, { useState, useEffect} from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config/config'
import state from '../store'
import { download } from '../assets'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { Tab, AIPicker, ColorPicker, FilePicker, CustomButton } from '../components'


const Customize = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {!snap.isHome && (
        <>
          <div className='absolute z-10 bottom-0 right-1/2'>
            this should be in the bottom middle
          </div>
        </>
      ) 
      }
    </AnimatePresence>
  )
}

export default Customize