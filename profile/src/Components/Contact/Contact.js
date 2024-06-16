import "./Contact.css"

function Contact() {
    return (
      <div className="form" id="contact">
        <div className="f-left">
          <div className="f-text">
            <span>Get in touch</span>
            <span>Contact me</span>
          </div>
        </div>
        <div className="f-right">
          <form>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="user"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="user"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="user"
              id="txtarea"
            />
            <input type="submit" value="Send" className="button" />
          </form>
        </div>
        <div className="blur3"></div>
        <div className="blur4"></div>
      </div>
    );
}

export default Contact;