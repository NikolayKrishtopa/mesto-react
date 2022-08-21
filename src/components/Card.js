import trashBinIcon from '../images/trash-bin-icon.svg'
import likeIcon from '../images/like-icon.svg'

export default function Card({
  id,
  key,
  likes,
  link,
  name,
  currentUserId,
  isOwn,
}) {
  return (
    <div key={key} id={id}>
      <article className="place-card">
        {isOwn && (
          <button
            className="place-card__remove-button responsible-fade"
            type="button"
            aria-label="Удалить карточку."
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
          onClick={() => console.log([currentUserId, id])}
        />
        <div className="place-card__annotation">
          <h2 className="place-card__title">{name}</h2>
          <div className="place-card__like">
            <button
              type="button"
              aria-label="Мне нравится"
              className="place-card__like-button responsible-fade responsible-fade_opacity_medium"
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
