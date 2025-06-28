import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label><br />
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
