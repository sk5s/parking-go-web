import WelcomeModal from './Welcome/WelcomeModal'
import loname from '../localstorage.json'
import { useState } from 'react'

function Welcome(params){
  const item_name = loname.not_first_time
  let to_open = false
  if (localStorage.getItem(item_name)){
    console.log("Welcome!")
    to_open = false
  } else {
    to_open = true
  }
  const [open, setOpen] = useState(to_open||params.user_open)

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(loname.not_first_time,true)
  }

  return <WelcomeModal handleClose={handleClose} open={open} />
}

export default Welcome