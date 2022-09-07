import CardPreview from "./views/cards/CardPreview";
import CardDetailsForm from "./views/form/CardDetailsForm";

function App() {
  return (
    <div className="h-screen font-grotesk text-veryDarkViolet text-lg">
      <div className="container py-16 flex flex-col gap-8 items-center">
        <CardPreview/>

        <CardDetailsForm />
      </div>
    </div>
  );
}

export default App;
