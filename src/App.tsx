import { useState } from "react";

import CardPreview from "./views/cards/CardPreview";
import CardDetailsForm from "./views/form/CardDetailsForm";
import ConfirmationPage from "./views/form/ConfirmationPage";

function App() {

  const [success, setSuccess] = useState<boolean>(false)

  const [name, setName] = useState<string | undefined>()
  const [number, setNumber] = useState<string | undefined>()
  const [expireMonth, setExpireMonth] = useState<string | undefined>()
  const [expireYear, setExpireYear] = useState<string | undefined>()
  const [cvc, setCvc] = useState<string | undefined>()

  const updateValues = (
    name: string,
    number: string,
    expireMonth: string,
    expireYear: string,
    cvc: string
  ) => {
    setName(name)
    setNumber(number)
    setExpireMonth(expireMonth)
    setExpireYear(expireYear)
    setCvc(cvc)

    setSuccess(true)
  }

  return (
    <div className="App min-h-screen font-grotesk text-veryDarkViolet text-lg flex flex-col items-center">      

      <div className="grow w-[375px] flex flex-col items-stretch px-4 pt-8 pb-16
            lg:grid lg:grid-cols-[375px_375px] xl:grid-cols-[500px_500px] 
            lg:gap-24 lg:w-full justify-center lg:items-center">
        
        <CardPreview 
          name={name}
          number={number}
          expireMonth={expireMonth}
          expireYear={expireYear}
          cvc={cvc}
        />

        <div className="max-w-[375px]">
          {
            success ? 
            
            <ConfirmationPage handleContinue={() => {setSuccess(false)}}/>

            :

            <CardDetailsForm updateValues={updateValues} />
          }
        </div>        
      </div>
    </div>
  );
}

export default App;
