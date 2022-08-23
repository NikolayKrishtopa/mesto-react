import { useState } from 'react'
import Main from './Main'
import Footer from './Footer'
import Header from './Header'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import AvatarInputs from './AvatarInputs'
import ProfileInputs from './ProfileInputs'
import PlaceInputs from './PlaceInputs'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isConfirmPopupOpen, setisConfirmPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState('')

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard('')
    setisConfirmPopupOpen(false)
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

  function handleRemoveClick() {
    setisConfirmPopupOpen(true)
  }
  document.addEventListener('keyup', (evt) => {
    evt.key === 'Escape' && closeAllPopups()
  })
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onRemoveClick={handleRemoveClick}
        />
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          children={<ProfileInputs />}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        />
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          children={<AvatarInputs />}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        />
        <PopupWithForm
          name="add-card"
          title="Новое место"
          children={<PlaceInputs />}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        />
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          children=""
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          buttonText="Да"
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </div>
  )
}

export default App
