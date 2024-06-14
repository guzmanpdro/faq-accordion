import Faq from "./Faq"
import './FaqList.css'

function FaqsList({ faqs }) {
  return (
    <ul className="faq-list">
      {
        faqs.map((faq, index) => {
          const { id, question, answer } = faq
          return (
            <li className="item" key={id}>
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