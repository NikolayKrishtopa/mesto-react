import { useState } from 'react'
import Main from './Main'
import Footer from './Footer'
import Header from './Header'
import PopupWithForm from './PopupWithForm'
import PopupWithPhoto from './PopupWithPhoto'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState('')

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard('')
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          children=""
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          children=""
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="add-card"
          title="Новое место"
          children=""
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        {/* <div className="popup popup_type_confirm">
          <div className="popup__container">
            <h3 className="popup__title">Вы уверены?</h3>
            <button
              type="button"
              aria-label="Подтвердить удаление карточки"
              name="confirm-button"
              className="popup__submit-button popup__submit-button_type_confirm
responsible-fade responsible-fade_opacity_strong"
            >
              Да
            </button>
            <button
              type="button"
              aria-label="Отменить удаление карточки"
              name="cancel-button"
              className="popup__submit-button popup__submit-button_type_cancel
responsible-fade responsible-fade_opacity_strong"
            >
              Нет
            </button>
            <button
              type="button"
              aria-label="Отменить"
              className="popup__close-button responsible-fade"
            >
              <img
                src={closeIcon}
                alt="Закрыть окно"
                className="popup__close-icon"
              />
            </button>
          </div>
        </div>
        <div className="popup popup_type_page-loading">
          <img
            src="./images/spinner.gif"
            alt="Идет загрузка"
            className="popup__spinner"
          />
        </div> */}
        <PopupWithPhoto card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </div>
  )
}

export default App
