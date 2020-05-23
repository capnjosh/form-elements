export let FormElementsCheckbox = () => {
    class FormElementsCheckbox extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            let name = this.getAttribute('name') || '';
            let value = this.getAttribute('value') || '';
            let label = this.innerHTML;
            let disabled = this.getAttribute('disabled') !== null ? 'disabled' : '';
            let checked = this.getAttribute('checked') !== null ? 'checked' : '';
            this.innerHTML = `
        <label>
          <input type="checkbox" name="${name}" value="${value}" ${disabled} ${checked}>
          <span class="element-label">${label}</span>
        </label>
      `;
        }
        static get observedAttributes() {
            return ['disabled'];
        }
        attributeChangedCallback() {
            let $input = this.querySelector('input');
            if (!$input) {
                return;
            }
            if (this.hasAttribute('disabled')) {
                $input.setAttribute('disabled', '');
            }
            else {
                $input.removeAttribute('disabled');
            }
        }
    }
    customElements.define('fe-checkbox', FormElementsCheckbox);
};
//# sourceMappingURL=_index.js.map