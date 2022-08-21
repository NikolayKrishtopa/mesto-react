import closeIcon from '../images/close-icon.svg'

export default function PopupWithPhoto() {
  return (
    <div className="popup popup_type_picture-full-screen">
      <div className="popup__photo-container">
        <button
          type="button"
          aria-label="закрыть окно."
          className="popup__close-button  responsible-fade"
        >
          <img
            src={closeIcon}
            alt="Закрыть окно."
            className="popup__close-icon"
          />
        </button>
        <img src="#" alt="#" className="popup__photo" />
        <h3 className="popup__title popup__title_type_photo">#</h3>
      </div>
    </div>
  )
}
