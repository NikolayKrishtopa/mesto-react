export default function ProfileInputs() {
  return (
    <>
      <input
        type="text"
        class="popup__field popup__field_type_user-name"
        name="name"
        id="name"
        required
        minlength="2"
        maxlength="40"
      />
      <p class="name-error popup__input-error popup__input-error_type_user-name"></p>
      <input
        type="text"
        class="popup__field popup__field_type_user-description"
        id="about"
        name="about"
        required
        minlength="2"
        maxlength="200"
      />
      <p class="about-error popup__input-error popup__input-error_type_user-descr"></p>
    </>
  )
}
