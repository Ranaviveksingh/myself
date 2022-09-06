// import { Container, ContainerSucces } from './styles'
// import { useForm, ValidationError } from '@formspree/react'
// import { toast, ToastContainer } from 'react-toastify'
// import ReCAPTCHA from 'react-google-recaptcha'
// import { useEffect, useState } from 'react'
// import validator from 'validator'

// export function Form() {
//   const [state, handleSubmit] = useForm('myyozglw')

//   const [validEmail, setValidEmail] = useState(false)
//   const [isHuman, setIsHuman] = useState(false)
//   const [message, setMessage] = useState('')

//   function verifyEmail(email: string) {
//     if (validator.isEmail(email)) {
//       setValidEmail(true)
//     } else {
//       setValidEmail(false)
//     }
//   }

//   useEffect(() => {
//     if (state.succeeded) {
//       toast.success('Email has been sent!', {
//         position: toast.POSITION.BOTTOM_LEFT,
//         pauseOnFocusLoss: false,
//         closeOnClick: true,
//         hideProgressBar: false,
//         toastId: 'succeeded',
//       })
//     }
//   })
//   if (state.succeeded) {
//     return (
//       <ContainerSucces>
//         <h3>Obrigado por entrar em contato!</h3>
//         <button
//           onClick={() => {
//             window.scrollTo({ top: 0, behavior: 'smooth' })
//           }}
//         >
//           Voltar ao topo
//         </button>
//         <ToastContainer />
//       </ContainerSucces>
//     )
//   }

//   return (
//     <Container>
//       <h2>Text me</h2>
//       <form onSubmit={handleSubmit}>
        
//         <input
//           placeholder="Email"
//           id="email"
//           type="email"
//           name="email"
//           onChange={(e) => {
//             verifyEmail(e.target.value)
//           }}
//           required
//         />
//         <ValidationError prefix="Email" field="email" errors={state.errors} />
//         <textarea
//           required
//           placeholder="Go ahead"
//           id="message"
//           name="message"
//           onChange={(e) => {
//             setMessage(e.target.value)
//           }}
//         />
//         <ValidationError
//           prefix="Message"
//           field="message"
//           errors={state.errors}
//         />
//         <ReCAPTCHA
//           sitekey="6LcAu-IdAAAAAJOTI5E_eRltZNQCvukIl2-f1glQ"
//           onChange={(e) => {
//             setIsHuman(true)
//           }}
//         ></ReCAPTCHA>
//         <button
//           type="submit"
         
//         >
//           Send
//         </button>
//       </form>
//       <ToastContainer />
//     </Container>
//   )
// }
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help



import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'

export function Form() {
  const [state, handleSubmit] = useForm('xaykqjoe')

  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }



useEffect(() => {
    if (state.succeeded) {
      toast.success('Email has been sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for Reaching out to me, I will get back to you shortly!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Text me</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Go ahead"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ReCAPTCHA
          sitekey="6LcAu-IdAAAAAJOTI5E_eRltZNQCvukIl2-f1glQ"
          onChange={(e) => {
            setIsHuman(true)
          }}
        ></ReCAPTCHA>
        <button
          type="submit"
         
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}










// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// function ContactForm() {
//   const [state, handleSubmit] = useForm("xaykqjoe");
//   if (state.succeeded) {
//       return <p>Thanks for time, I will revert back to you very soon!</p>;
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }
// function App() {
//   return (
//     <ContactForm />
//   );
// }
// export default App;