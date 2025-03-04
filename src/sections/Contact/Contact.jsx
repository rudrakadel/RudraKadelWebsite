import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mldgqyzd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setMessage('Thanks for contacting me! ✅');
        form.reset(); // Clears the form after setting the message
      } else {
        setMessage('Oops! Something went wrong. ❌');
      }
    } catch (error) {
      setMessage('Network error. Please try again later.');
    }

    // Hide message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      {/* Popup Message */}
      {message && <p className={`${styles.popup} ${message ? styles.show : styles.hidden}`}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>

        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
