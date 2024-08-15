/* eslint-disable react/react-in-jsx-scope */
import { FaUserCog } from 'react-icons/fa'

import { BsFillMotherboardFill } from "react-icons/bs";
import MenuItem from './MenuItem';


const AdminMenu = () => {
  return (
    <>
     
      <MenuItem icon={BsFillMotherboardFill} label='Add Product' address='/dashboard'/>
    </>
  )
}

export default AdminMenu
