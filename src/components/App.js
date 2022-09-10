import { useState, useEffect } from 'react'
import Main from './Main'
import Footer from './Footer'
import Header from './Header'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import AvatarInputs from './AvatarInputs'
import PopupLoading from './PopupLoading'
import api from '../utils/api'
import CurrentUserContext from '../contexts.js/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import AddPlacePopup from './AddPlacePopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])
  const [cardToRemove, setCardToRemove] = useState({})

  function handleCardLike(card, isLiked) {
    api
      .handleLikeServer(card, isLiked)
      .then((newCard) =>
        setCards(cards.map((e) => (newCard._id === e._id ? newCard : e)))
      )
      .catch((err) => console.log(err))
  }

  function handleCardDelete(e) {
    e.preventDefault()
    api
      .removeCard(cardToRemove)
      .then(setCards(cards.filter((e) => e._id !== cardToRemove._id)))
      .catch((err) => console.log(err))
      .finally(closeAllPopups())
  }

  useEffect(() => {
    Promise.all([api.getInititalCards(), api.getUserInfo()])
      .then(([cardsArr, userData]) => {
        setCards(cardsArr)
        setCurrentUser(userData)
      })
      .catch((err) => console.log(err))
      .finally(setIsLoading(false))
  }, [])

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
    setCardToRemove({})
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

  function handleRemoveClick(card) {
    setCardToRemove(card)
  }

  function handleUpdateUser(user) {
    api.setUserInfo(user).then((res) => {
      setCurrentUser(res)
      closeAllPopups()
    })
  }

  function handleAddCard(card) {
    api
      .createNewCard(card)
      .then((res) => {
        setCards([res, ...cards])
        closeAllPopups()
      })
      .catch((err) => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {isLoading && <PopupLoading />}
        <div className={`page ${isLoading && 'page_loading'}`}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onRemoveClick={handleRemoveClick}
            cards={cards}
            onCardLike={handleCardLike}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            children={<AvatarInputs />}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            buttonText="Сохранить"
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddCard={handleAddCard}
          />
          <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            isOpen={Object.keys(cardToRemove).length > 0}
            onClose={closeAllPopups}
            onSubmit={handleCardDelete}
            buttonText="Да"
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
