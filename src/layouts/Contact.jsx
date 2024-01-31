import '../styles/Contact.css';
export function Contact() {
  const handlesubmit = (e) => {
    e.preventDefault()
    alert('Message send successfully')
  }
  return (
    <section id="contact" className="seccion-container">
      <h2 className='seccion-title'>Contact</h2>
      <div className='form-container'>
        <form onSubmit={handlesubmit}>
            <label>
              Full name
              <input type="text" placeholder='Full name'/>
            </label>
            <label>
              Email address
              <input type="text" placeholder='example@domain.com'/>
            </label>
            <p>Message</p>
            <textarea placeholder='Type your message'></textarea>
            <button>Send</button>
        </form>
      </div>
    </section>
  )
}