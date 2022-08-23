export default function PlaceInputs() {
  return (
    <>
      <input
        type="text"
        minlength="2"
        maxlength="30"
        required
        name="name"
        class="popup__field popup__field_type_new-card-title"
        placeholder="Название"
      />
      <p class="name-error popup__input-error popup__input-error_type_card-title"></p>
      <input
        type="url"
        required
        class="popup__field popup__field_type_new-card-link"
        placeholder="Ссылка на картинку"
        name="link"
      />
      <p class="link-error popup__input-error popup__input-error_type_card-link"></p>
    </>
  )
}
