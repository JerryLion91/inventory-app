import Button from 'Components/Button';
import { useEffect } from 'react';
import M from 'materialize-css';

interface ModalProps {
  children?: JSX.Element;
  materialIcon?: string;
  buttonText?: string;
  id: string;
}

const Modal = ({
  children,
  id,
  materialIcon,
  buttonText,
}: ModalProps): JSX.Element => {
  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  }, []);
  return (
    <>
      <div id={id} className="modal">
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <Button classNames="modal-close waves-effect waves-green btn-flat">
            Sair
          </Button>
        </div>
      </div>
      <Button
        classNames="modal-trigger"
        href={`#${id}`}
        materialIcon={materialIcon}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default Modal;
