import closeIcon from '../images/close-icon.svg'

export default function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonText,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen && 'popup_active'}`}
      onClick={onClose}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <h3 className="popup__title">{title}</h3>
        <form
          className={`popup__form popup__form_type_${name}`}
          novalidate
          name={name}
        >
          {children}
          <button
            type="submit"
            name="edit-profile-submit-button"
            className="popup__submit-button
responsible-fade responsible-fade_opacity_strong"
          >
            {buttonText}
          </button>
        </form>
        <button
          type="button"
          aria-label="Отменить"
          className="popup__close-button  responsible-fade"
          onClick={onClose}
        >
          <img
            src={closeIcon}
            alt="Закрыть окно"
            className="popup__close-icon"
          />
        </button>
      </div>
    </div>
  )
}
