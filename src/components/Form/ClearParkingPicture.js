import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"

function ClearParkingPicture(params) {
  const { t } = useTranslation()
  return (
    <>
      <Button className="w-100" variant="primary" onClick={params.clear_pictures}>{t("General.clear")+t("General.picture")}</Button>{' '}
    </>
  )
}

export default ClearParkingPicture