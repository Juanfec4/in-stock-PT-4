import IconButton from "../../buttons/icon";
import DeleteButton from "../../buttons/delete";
import SecondaryButton from "../../buttons/secondary";
import closeIcon from "../../../../assets/icons/close-icon.svg";

import "./styles.scss";

const DeleteModal = ({
  itemName,
  handleDelete,
  handleCancel,
  listMessage,
  titleMessage,
}) => {
  return (
    <div className="modal__background">
      <div className="modal__container">
        <IconButton handleClick={handleCancel} icon={closeIcon} />
        <div className="modal__text-container">
          <h1 className="modal__title">
            Delete {itemName} {titleMessage}?
          </h1>
          <p className="modal__message">
            Please confirm that you'd like to delete {itemName} from the{" "}
            {listMessage}. You won't be able to undo this action.
          </p>
        </div>
        <div className="modal__button-container">
          <SecondaryButton innerText={"Cancel"} handleClick={handleCancel} />
          <DeleteButton innerText={"Delete"} handleClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
