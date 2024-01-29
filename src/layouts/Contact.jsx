import '../styles/Contact.css';
export function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2>Contac</h2>
      <div className='form-container'>
        <form>
            <input type="text" placeholder='your name'/>
            <input type="text" placeholder='your email'/>
            <textarea placeholder='message'></textarea>
        </form>
      </div>
    </section>
  )
}