import Container from "./components/Container"
import InteractiveRaiting from "./components/InteractiveRaiting"
import ThankYou from "./components/ThankYou"
import {useState} from 'react'

const App = () => {
  const [selectedRating, setSelectedRating] = useState<number|null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
 const selectedRatingHandler =(item:number)=>{
  setSelectedRating(item)
  setShowThankYou(true)
 }
  return (
    <Container className="font-Overpass w-full h-screen flex justify-center items-center bg-black">
      {showThankYou?<ThankYou selectedRating={selectedRating}/>:<InteractiveRaiting onclickItem={selectedRatingHandler}/>}
      
      
    </Container>
  )
}

export default App
