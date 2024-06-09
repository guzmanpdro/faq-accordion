import { faqs } from './mocks/faqs.json'
import FaqAccordion from './components/FaqAccordion'
import './App.css'

function App() {
  const accordionTitle = 'FAQs'

  return (
    <main>
      <FaqAccordion
        title={accordionTitle}
        faqs={faqs}
      />
    </main>
  )
}

export default App
