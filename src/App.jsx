
import DynamicForm from "./DynamicForm"
import CustomSubmission from './CustomSubmissionForm'
import ValidationForm from "./ValidationForm"
function App() {

  return (
    <>

      <h1>Dynamic Form Input Focus</h1>
      <DynamicForm />
      <h1>Real-time Input Validation</h1>
      <ValidationForm />
      <h1>CoustomSubmission</h1>
      <CustomSubmission />

    </>
  )
}

export default App
