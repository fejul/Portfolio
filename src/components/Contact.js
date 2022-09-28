import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_90zt3dv', 'template_yqv63fo', form.current, '2CrcCsPdBoenP6Uxa');
		/*  .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); */
		/* To reset the form after submitting it */
		e.target.reset();
	};
	return (
		<>
		<div className="container">
			<form className="contact-form" ref={form} onSubmit={sendEmail}>
				<h3>Contact me</h3>
				<h3>Get In Touch</h3>
				<input id="name" type="text" placeholder="Name" name="name" required />
				<label for="name" />
				<input id="email" type="email" placeholder="Email" name="email" required />
				<label for="email" />
				<input id="subject" type="text" placeholder="Subject" name="subject" required />
				<label for="subject" />
				<textarea id="message" placeholder="Your Message" name="message" rows="10" cols="30" required />
				<label for="message" />
				<button type="submit" className="btn-send">
					SEND MESSAGE
				</button>
			</form>
			<aside className="contact-info">
				<div className="location">
					<span>
						<i class="fa-sharp fa-solid fa-location-dot" />
					</span>
					<h4>Location</h4>
					<h5>Berlin, Germany</h5>
				</div>
				<div className="email">
					<span>
						<i class="fa-solid fa-envelope" />
					</span>
					<h4>Email</h4>
					<h5>
						<a href="mailto:fellerjulia@icloud.com">fellerjulia@icloud.com</a>
					</h5>
				</div>
				<div className="phone">
					<span>
						<i class="fa-solid fa-phone" />
					</span>
					<h4>Phone</h4>
					<h5>
						<a href="tel:+49 151 55853403">+49 151 55853403</a>
					</h5>
				</div>
				
			</aside>
			<div className="contact">
				<ul className="icons">
					<li>
						<a href="https://github.com/fejul" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-github" />
						</a>
					</li>
					<li>
						<a href="https://linkedin.com/in/fellerjulia" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-linkedin" />
						</a>
					</li>
				</ul>
			</div>
			</div>
			
	    </>
		
	);
};

export default Contact;
