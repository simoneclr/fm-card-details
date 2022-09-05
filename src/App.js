import CardPreviewBack from "./views/cards/CardPreviewBack";
import CardPreviewFront from "./views/cards/CardPreviewFront";

function App() {
  return (
    <div className="h-screen font-grotesk text-lg bg-zinc-700">
     <div className="container py-16 flex flex-col gap-16 justify-center items-center">
        <CardPreviewFront number={"0000 0000 0000 0123"}/>

        <CardPreviewBack number={"0000 0000 0000 0123"}/>
      </div>
    </div>
  );
}

export default App;
