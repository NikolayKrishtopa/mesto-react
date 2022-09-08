import { useState, useContext } from 'react'
import trashBinIcon from '../images/trash-bin-icon.svg'
import likeIcon from '../images/like-icon.svg'
import api from '../utils/api'
import CurrentUserContext from '../contexts.js/CurrentUserContext'

export default function Card(props) {
  const { card, onCardClick, onRemoveClick } = props
  const { _id: cardId, likes: initialLikes, link, name } = card

  const currentUser = useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id

  const [isLiked, setIsLiked] = useState(
    initialLikes.filter((e) => e._id === currentUser._id).length !== 0
  )

  const [likes, setLikes] = useState(initialLikes)

  function handleClick() {
    onCardClick(card)
  }

  function handleLike() {
    api.handleLikeServer(cardId, isLiked).then((res) => {
      setIsLiked(
        res.likes.filter((e) => e._id === currentUser._id).length !== 0
      )
      setLikes(res.likes)
    })
  }

  return (
    <div id={cardId}>
      <article className="place-card">
        {isOwn && (
          <button
            className="place-card__remove-button responsible-fade"
            type="button"
            aria-label="Удалить карточку."
            onClick={onRemoveClick}
          >
            <img
              src={trashBinIcon}
              alt="Удалить карточку."
              className="place-card__remove-button-icon"
            />
          </button>
        )}
        <img
          src={link}
          alt={name}
          className="place-card__photo"
          onClick={handleClick}
        />
        <div className="place-card__annotation">
          <h2 className="place-card__title">{name}</h2>
          <div className="place-card__like">
            <button
              type="button"
              aria-label="Мне нравится"
              className={`place-card__like-button responsible-fade responsible-fade_opacity_medium ${
                isLiked && 'place-card__like-button_active'
              }`}
              onClick={handleLike}
            >
              <img
                src={likeIcon}
                alt="нравится!"
                className="place-card__like-icon"
              />
            </button>
            <p className="place-card__like-counter" id="like-counter">
              {likes.length}
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
