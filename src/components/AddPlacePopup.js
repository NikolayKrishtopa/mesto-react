import PlaceInputs from './PlaceInputs'
import PopupWithForm from './PopupWithForm'
import { useState, useEffect } from 'react'

export default function AddPlacePopup(props) {
  const { isOpen, onClose, onAddCard, isSaving } = props
  const [cardName, setCardName] = useState('')
  const [link, setLink] = useState('')

  useEffect(() => {
    setCardName('')
    setLink('')
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault()
    onAddCard({ name: cardName, link: link })
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
      <PlaceInputs
        cardName={cardName}
        link={link}
        onCardNameChange={setCardName}
        onLinkChange={setLink}
      />
    </PopupWithForm>
  )
}
