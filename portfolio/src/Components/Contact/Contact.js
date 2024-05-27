function Contact() {
    return (
      <div>
        <div>
          <div>
            <span>Get in touch</span>
            <span>Contact me</span>
          </div>
        </div>
        <div>
          <form>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <textarea name="message" placeholder="Message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
}

export default Contact;