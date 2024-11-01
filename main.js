import { faqs } from './faqs';
import iconMinus from '/icon-minus.svg';
import iconPlus from '/icon-plus.svg';

function fillFaqsList(faqs, element) {
  
  faqs.forEach((faq, index) => {
    const { ask, answer } = faq;

    const liElement = document.createElement('li');
    const detailsElement = document.createElement('details');
    const summaryElement = document.createElement('summary');
    const pElement = document.createElement('p');
    const iconContainer = document.createElement('div');

    detailsElement.classList.add('faq');
    summaryElement.classList.add('label-faq');
    pElement.classList.add('text-faq');
    iconContainer.classList.add('icon-container');

    detailsElement.setAttribute('name', 'faqs')
    
    summaryElement.textContent = ask;
    pElement.textContent = answer;

    detailsElement.appendChild(summaryElement);
    detailsElement.appendChild(pElement);
    liElement.appendChild(detailsElement);

    if (index > 0) {
      liElement.classList.add('border');
    } else {
      detailsElement.setAttribute('open', '');
    }

    const bgUrl = detailsElement.open
    ? `url("${iconMinus}")`
    : `url("${iconPlus}")`;

    iconContainer.style.background = bgUrl;
    summaryElement.appendChild(iconContainer);

    detailsElement.addEventListener('toggle', () => {
      const iconUrl = detailsElement.open
      ? `url("${iconMinus}")`
      : `url("${iconPlus}")`;

      iconContainer.style.background = iconUrl;
      summaryElement.appendChild(iconContainer);
    });

    element.appendChild(liElement);
  });
  
}

const faqListElement = document.querySelector('#faq-list');

fillFaqsList(faqs, faqListElement);