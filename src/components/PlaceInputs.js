export default function PlaceInputs(props) {
  const { cardName, link, onCardNameChange, onLinkChange } = props
  return (
    <>
      <input
        type="text"
        minLength="2"
        maxLength="30"
        required
        name="name"
        className="popup__field popup__field_type_new-card-title"
        placeholder="Название"
        value={cardName}
        onChange={(e) => onCardNameChange(e.target.value)}
      />
      <p className="name-error popup__input-error popup__input-error_type_card-title"></p>
      <input
        type="url"
        required
        className="popup__field popup__field_type_new-card-link"
        placeholder="Ссылка на картинку"
        name="link"
        value={link}
        onChange={(e) => onLinkChange(e.target.value)}
      />
      <p className="link-error popup__input-error popup__input-error_type_card-link"></p>
    </>
  )
}
