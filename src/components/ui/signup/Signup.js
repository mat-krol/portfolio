import React from 'react'
import classes from './Signup.module.css'

function Signup(props) {

  
  const [submitted, setSubmitted] = React.useState(false)
  
  const [form, setValues] = React.useState({ name: '', email: '' });
  
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    setValues({ firstName: '', email: '', checkbox: false })
    setSubmitted(true)
  }
 
  return (
    <div className={classes.SignupHolder}>
        <form className={classes.Signup} id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/YOUR_EMAIL_HERE" method="post">
        <fieldset id="fs-frm-inputs">
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <label for="full-name">Name</label>
            <input type="text" name="name" id="full-name" placeholder="Your Name" required="" />
            <label for="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="Your Email" required="" />
            <label for="message">Message</label>
            <textarea rows="5" name="message" id="message" placeholder="Your Message" required=""></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
        </fieldset>
        <input type="submit" value="Submit" />
        </form>
    </div>
    //   {/* <form onSubmit={handleSubmit} className={classes.Signup} action="https://formspree.io/email@domain.tld" method="POST">
    //     {props.submitted && submitted && <p>{props.submitted}</p>}
    //     <label>
    //       Your Name*
    //       <input
    //         value={form.firstName}
    //         type="text"
    //         name="name"
    //         onChange={updateField}
    //         required
    //       />
    //     </label>
    //     <label>
    //       Your Email*
    //       <input
    //         value={form.email}
    //         name="email"
    //         type="email"
    //         onChange={updateField}
    //         required
    //       />
    //     </label>
    //     <button disabled={!form.firstName || !form.email || !form.checkbox}  onClick={props.onClick}>Submit</button>
    //   </form> */}
  );
}

export default Signup