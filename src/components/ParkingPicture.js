import Upload from './Form/Upload'
import Picture from './Picture/Picture'
import ClearParkingPicture from './Form/ClearParkingPicture'
import loname from './../localstorage.json'
import alertify from 'alertifyjs/build/alertify.min.js'
import ReactLoading from 'react-loading';

import { useState } from 'react'
import Compressor from 'compressorjs'

function ParkingPicture(){
  const item_name = loname.image_data
  const item_caption = loname.image_caption

  const clear_pictures = () => {
    alertify.confirm(
      'Delete?',
      'Delete pictures forever?',
      () => {
        alertify.success('Deleted')
        localStorage.removeItem(loname.image_data)
        renewImg('')
        updateCaption('')
      },
      () => {
        alertify.error('Cancel')
      }
    )
  }
  let stored_image = {
    img: undefined,
    caption: undefined
  }
  if (localStorage.getItem(item_name) && localStorage.getItem(item_caption)){
    stored_image.img = localStorage.getItem(item_name)
    stored_image.caption = localStorage.getItem(item_caption)
  }

  const [img, renewImg] = useState(stored_image.img)
  const [imgCaption, updateCaption] = useState(stored_image.caption)
  const [loading, changeLoadingTo] = useState(false)

  const read_and_display_image = (event) => {
    const reader = new FileReader()
    changeLoadingTo(true)
    reader.addEventListener("load",() => {
      try{
        let uploaded_image = reader.result
        let file = event.target.files[0]
        renewImg(uploaded_image)
        updateCaption(file.name)
        localStorage.setItem(item_name, uploaded_image)
        localStorage.setItem(item_caption, file.name)
      }catch(e){
        if (e.name.toLowerCase() === "quotaexceedederror"){
          alertify.confirm(
            'Compress image?',
            'Image is too large parking go can\'t save it.',
            () => {
              compress_image(event.target.files[0],0.8)
            },
            () => {
              alertify.error('Cancel')
              renewImg('')
              updateCaption('')
              changeLoadingTo(false)
            }
          )
        }
      }finally{
        if (localStorage.getItem(item_name)){
          alertify.success('Saved!')
          changeLoadingTo(false)
        }
      }
    })
    reader.readAsDataURL(event.target.files[0])
  }
  const compress_image = (file, quality) => {
    console.log('Try compress quality: '+quality)
    new Compressor(file, {
      quality: quality,
      success: (compressed_image) => {
        let compressedImageReader = new FileReader()
        compressedImageReader.addEventListener('load',() => {
          try{
            let uploaded_image = compressedImageReader.result
            renewImg(uploaded_image)
            updateCaption(file.name)
            localStorage.setItem(item_name, uploaded_image)
            localStorage.setItem(item_caption, file.name)
          }catch(e){
            if (e.name.toLowerCase() === "quotaexceedederror"){
              if (quality >= 0.6) {
                compress_image(file,quality-0.2)
              }else {
                alertify.alert('Sorry!','Image is too large, please use smaller one again.')
                renewImg('')
                updateCaption('')
              }
            }
          }finally{
            if (localStorage.getItem(item_name)){
              alertify.success('Saved!')
              changeLoadingTo(false)
            }
          }
        })
        compressedImageReader.readAsDataURL(compressed_image)
      },
    })
  }
  return (
    <>
      {img ? <></> : <Upload update={read_and_display_image} />}
      <div className='mt-5 mb-5' style={{width:"100%", textAlign: "center"}}>
        {img ? (<ClearParkingPicture clear_pictures={clear_pictures} />) : (<></>)}
        {loading
        ? <div className='mt-5 mb-5 d-flex justify-content-center'><ReactLoading type="balls" color="#000" width={100} height={100} /></div>
        : <Picture img={img} imgCaption={imgCaption} />}
      </div>
    </>
  )
}

export default ParkingPicture