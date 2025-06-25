import Home from "./composant/Home"
import Box from "./composant/Box"
import Depense from "./composant/Depense"
import Revenu from "./composant/Revenu"

const App = () => {
  return (
    <>
       <Home />
       <Box />
       <Depense Depenses={[]} setDepenses={function (): void {
        throw new Error("Function not implemented.")
      } }/>
       <Revenu revenus={[]} setRevenus={function (): void {
        throw new Error("Function not implemented.")
      } }/>
    </>
     
  )
}

export default App
