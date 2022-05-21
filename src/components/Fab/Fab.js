import { Container, Button } from "react-floating-action-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

export default function Fab(props) {
  return (
    <Container>
      <Button
        tooltip="Welcome"
        onClick={props.welcome}
        rotate={true}
      >
        <FontAwesomeIcon icon={faFaceSmile} />
      </Button>
      {props.showRemove === true ? <Button
        tooltip="Delete"
        onClick={props.remove}
        rotate={true}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button> : ""}
    </Container>
  );
}
