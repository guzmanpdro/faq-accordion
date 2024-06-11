import { IconStar } from "./Icons"
import FaqList from "./FaqList"
import './FaqAccordion.css'

function FaqAccordion({ title, faqs }) {
  return (
    <article className="accordion">
      <h1 className="title">
        <span>
          <IconStar />
        </span>
        {title}
      </h1>
      <FaqList faqs={faqs} />
    </article >
  )
}

export default FaqAccordion