import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import WelcomeCarousel from './WelcomeCarousel'

import { useTranslation } from 'react-i18next'

function WelcomeModal(params) {
  const { t } = useTranslation()
  let show = params.open
  let handleClose = params.handleClose

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{t("Welcome.welcome")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome to parking go!{" "}
          <br/>
          <h3>Features: </h3>
          <WelcomeCarousel />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {t("General.close")}
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WelcomeModal