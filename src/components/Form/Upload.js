import { Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function Upload(params){
  let { t } = useTranslation()
  return (
    <>
      <Form.Group controlId="formFileLg" className="mt-3 mb-3">
        <Form.Label>{t("General.upload")}</Form.Label>
        <Form.Control onChange={params.update} type="file" size="lg" accept={".png,.jpg,.jpeg"} />
      </Form.Group>
    </>
  )
}

export default Upload