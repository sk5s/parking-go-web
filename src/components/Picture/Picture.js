import { Figure } from "react-bootstrap"
import Viewer from 'react-viewer' //https://github.com/infeng/react-viewer
import { useState } from "react"

function Picture(params) {
  let img = params.img
  let imgCaption = params.imgCaption
  const [ visible, setVisible ] = useState(false)
  return (
    <Figure className="mt-3 mb-3">
      {img 
      ? <Figure.Image
        style={{width: "100%", height: "auto"}}
        alt={imgCaption}
        src={img}
        onClick={() => setVisible(true)}
      />
      : <lottie-player src="https://assets9.lottiefiles.com/datafiles/9jPPC5ogUyD6oQq/data.json"  background="transparent"  speed="1"  style={{maxWidth: "400px",height: "auto"}}  loop autoplay></lottie-player>}
      <Figure.Caption className="user-select-all">{imgCaption}</Figure.Caption>

      <Viewer
        style={{zIndex: "9999"}}
        visible={visible}
        onClose={() => { setVisible(false); } }
        images={[{src: img, alt: imgCaption}]}
        zIndex={9999}
        noNavbar={true}
        noImgDetails={true}
        changeable={false}
        zoomSpeed={0.3}
        minScale={0.8}
        showTotal={false}
        defaultImg="https://upload.cc/i1/2022/01/19/Zx9BwP.gif"
      />
    </Figure>
  )
}

export default Picture