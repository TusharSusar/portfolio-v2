import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted:', form)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        Message
        <textarea name="message" value={form.message} onChange={handleChange} rows="5" />
      </label>
      <button type="submit">Send Message</button>
    </form>
  )
}
