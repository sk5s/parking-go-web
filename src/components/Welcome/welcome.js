import loname from '../../localstorage.json'

export function reset_welcome_and_reload(){
  localStorage.removeItem(loname.not_first_time)
  window.location.reload()
}