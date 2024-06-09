import Details from './Details'

function Faq({ question, answer, index }) {
  return (
    <Details index={index}>
      <summary>
        {question}
      </summary>
      <p>
        {answer}
      </p>
    </Details>
  )
}

export default Faq