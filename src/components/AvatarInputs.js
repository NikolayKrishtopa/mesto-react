export default function AvatarInputs() {
  return (
    <>
      <input
        type="url"
        required
        class="popup__field popup__field_type_edit-avatar"
        placeholder="Ссылка на картинку"
        name="avatar"
      />
      <p class="avatar-error popup__input-error popup__input-error_type_edit-avatar"></p>
    </>
  )
}
