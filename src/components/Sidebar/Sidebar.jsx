import React from 'react'
import './Sidebar.css'
import {asset, assets} from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="top">
          <img src={assets.menu_icon} alt='icon' />
      </div>
      <div className="bottom">

      </div>
    </div>
  )
}

export default Sidebar