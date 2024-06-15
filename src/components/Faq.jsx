import Details from './Details'

function Faq({ question, answer, index }) {
  return (
    <Details index={index}>
      <summary>
        {question}
        <div></div>
      </summary>
      <p>
        {answer}
      </p>
    </Details>
  )
}

export default Faq