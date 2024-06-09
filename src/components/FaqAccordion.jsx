import { IconStar } from "./Icons"
import FaqList from "./FaqList"

function FaqAccordion({ title, faqs }) {
  return (
    <article>
      <h1>
        <span>
          <IconStar />
        </span>
        {title}
      </h1>
      <FaqList faqs={faqs} />
    </article>
  )
}

export default FaqAccordion