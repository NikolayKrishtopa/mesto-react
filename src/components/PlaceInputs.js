export default function PlaceInputs() {
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
      />
      <p className="name-error popup__input-error popup__input-error_type_card-title"></p>
      <input
        type="url"
        required
        className="popup__field popup__field_type_new-card-link"
        placehsolder="Ссылка на картинку"
        name="link"
      />
      <p className="link-error popup__input-error popup__input-error_type_card-link"></p>
    </>
  )
}
