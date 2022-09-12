import Input from './Input'
import PopupWithForm from './PopupWithForm'
import { useState, useEffect } from 'react'

export default function AddPlacePopup(props) {
  const { isOpen, onClose, onAddCard, isSaving } = props
  const [cardName, setCardName] = useState('')
  const [cardLink, setCardLink] = useState('')

  useEffect(() => {
    setCardName('')
    setCardLink('')
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault()
    onAddCard({ name: cardName, link: cardLink })
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
      onSubmit={handleSubmit}
      isSaving={isSaving}
    >
      <Input
        type="text"
        placeholder="Название"
        value={cardName}
        onChange={setCardName}
      />
      <Input
        type="url"
        placeholder="Ссылка на картинку"
        value={cardLink}
        onChange={setCardLink}
      />
    </PopupWithForm>
  )
}
