import Container from "./Container"
import factorLogo from '../assets/images/illustration-thank-you.svg'
interface Props {
  selectedRating:number|null
}

const ThankYou = ({selectedRating}:Props) => {
  return (
    <Container className="w-[340px] text-white h-[380px] sm:w-[420px] sm:h-[450px] bg-VeryDarkBlue px-5 py-8 sm:px-8 sm:py-12 rounded-2xl flex flex-col justify-between items-center ">
      <img className="w-[150px]" src={factorLogo} alt="illustration-thank-you" />
      <h2 className="bg-DarkBlue px-6 py-1 rounded-full text-Orange">You selected {selectedRating} out 5</h2>
      <h3 className="text-3xl">Thank you!</h3>
      <p  className="text-center text-MediumGrey">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
    </Container>
  )
}

export default ThankYou
