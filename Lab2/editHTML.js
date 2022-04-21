import DOMElement from './DomElement.js';

export const renderEditHtml = () => {
  const buttons = document.querySelectorAll('#html-edit-list button');

  buttons.forEach(btn => {
    btn.addEventListener('dblclick', event => {
      const sectionNumber = event.target.dataset['sectionBtn'];
      const section = document.querySelector(
        `[data-section="${sectionNumber}"]`
      );
      const textNode = [...section.childNodes].find(item => item.nodeName === "#text");
      const hasSpecialSymbol = textNode?.textContent?.includes("\n");
      const isSpecialSymbolAlone = textNode?.textContent?.trim().length === 2;
      if (!textNode || (hasSpecialSymbol && isSpecialSymbolAlone) || !textNode.textContent.trim().length) {
        alert("It's impossible to edit this section");
        return;
      }

      const form = createFormElements(textNode, sectionNumber);
      section.append(form);
    });
  });
};

function createFormElements(textNode, sectionNumber) {
  const textarea = new DOMElement(
    'textarea',
    textNode.textContent,
    'form-control',
    {id: `text-area-${sectionNumber}`}
  ).render();
  const label = new DOMElement("label", "Edit HTML",
    "form-label", {for: `text-area-${sectionNumber}`}).render();
  const textareaContainer = new DOMElement("div",
    [label, textarea], "mb-3").render();
  const submitBtn = new DOMElement(
    'button',
    'Submit',
    'btn btn-primary'
  ).render();
  const resetBtn = new DOMElement(
    "button",
    "Reset",
    "btn btn-danger",
    {type: "reset"}
  ).render();
  const buttonsContainer = new DOMElement(
    "div",
    [submitBtn, resetBtn],
    "btn-container"
  ).render()

  const handleFormSubmit = event => {
    event.preventDefault();
    textNode.textContent = textarea.value;
    localStorage.setItem(`data-section=${sectionNumber}`, textarea.value);
    event.target.remove()
  };

  const handleFormReset = event => {
    localStorage.removeItem(`data-section=${sectionNumber}`);
    event.target.remove();
  }
  return new DOMElement('form', [textareaContainer, buttonsContainer], 'form', '', {
    submit: handleFormSubmit,
    reset: handleFormReset
  }).render();
}
