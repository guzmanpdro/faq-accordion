import Faq from "./Faq"

function FaqsList({ faqs }) {
  return (
    <ul>
      {
        faqs.map((faq, index) => {
          const { id, question, answer } = faq
          return (
            <li key={id}>
              <Faq
                question={question}
                answer={answer}
                index={index}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default FaqsList