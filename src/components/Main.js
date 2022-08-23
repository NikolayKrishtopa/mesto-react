import { useState, useEffect } from 'react'
import editIcon from '../images/pensil-icon.svg'
import addIcon from '../images/plus-icon.svg'
import api from '../utils/api'
import Card from './Card.js'

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onRemoveClick,
  onLoading,
}) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [id, setId] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInititalCards()])
      .then(([userData, cardsArr]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setId(userData._id)
        setCards(cardsArr)
      })
      .catch((err) => console.log(err))
      .finally(onLoading(false))
  }, [])

  return (
    <main className="content">
      <section className="navigation">
        <div className="profile">
          <button
            type="button"
            aria-label="Редактировать фото профиля"
            name="edit-avatar-button"
            onClick={onEditAvatar}
            className="profile__edit-avatar-button responsible-fade responsible-fade_opacity_strong"
          >
            <img src={userAvatar} alt="" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                aria-label="Редактировать профиль"
                name="edit-profile-button"
                className="profile__edit-button responsible-fade"
                onClick={onEditProfile}
              >
                <img
                  src={editIcon}
                  alt="редактировать профиль."
                  className="profile__edit-icon"
                />
              </button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Добавить ваше место"
          name="add-card-button"
          className="navigation__add-place-button responsible-fade"
          onClick={onAddPlace}
        >
          <img
            src={addIcon}
            alt="добавить ваше место."
            className="navigation__add-place-icon"
          />
        </button>
      </section>
      <section className="place-cards">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              currentUserId={id}
              onCardClick={onCardClick}
              onRemoveClick={onRemoveClick}
            />
          )
        })}
      </section>
    </main>
  )
}
