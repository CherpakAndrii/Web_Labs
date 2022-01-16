import DOMElement from './DomElement.js';

export const renderEditHtml = () => {
  const buttons = document.querySelectorAll('#html-edit-list button');

  buttons.forEach(btn => {
    btn.addEventListener('dblclick', event => {
      const sectionNumber = event.target.dataset['sectionBtn'];
      const section = document.querySelector(
        `[data-section="${sectionNumber}"]`
      );
      const textarea = new DOMElement(
        'textarea',
        section.textContent,
        'form-control',
        { id: `text-area-${sectionNumber}` }
      ).render();
      const label = new DOMElement('label', 'Edit HTML', 'form-label', {
        for: `text-area-${sectionNumber}`,
      }).render();
      const textareaContainer = new DOMElement(
        'div',
        [label, textarea],
        'mb-3'
      ).render();
      const submitBtn = new DOMElement(
        'button',
        'Submit',
        'btn btn-primary'
      ).render();
      const handleFormSubmit = event => {
        event.preventDefault();
        section.textContent = textarea.value;
      };
      const form = new DOMElement(
        'form',
        [textareaContainer, submitBtn],
        'form',
        '',
        {
          submit: handleFormSubmit,
        }
      ).render();
      section.append(form);
    });
  });
};
