import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>You can contact me</h2>
        <p>Here</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:ranaviveksingh09@gmail.com">ranaviveksingh09@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:91 8310757823">(91) 8310757823</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}