import { LAYOUT } from '../_base.js';
export let FormElementsText = () => {
    class FormElementsText extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            let name = this.getAttribute('name') || '';
            let label = this.getAttribute('placeholder') || '';
            let value = this.getAttribute('value') || '';
            let classes = value.trim() !== '' ? 'minimize-label' : '';
            let disabledOrReadonly = this.getAttribute('disabled') !== null ? 'disabled' :
                this.getAttribute('readonly') !== null ? 'readonly' : '';
            let userHelperText = this.getAttribute('data-helper-text') || '';
            this.innerHTML = `
        <input type="text" id="${name}" name="${name}" value="${value}" ${disabledOrReadonly} class="${classes}">
        <label for="${name}">${label}</label>
        <span class="helper-text">
          <span class="user">${userHelperText}</span>
          ${LAYOUT.HelperText}
        </span>
      `;
            let $input = this.querySelector('input');
            $input.addEventListener('focus', function () {
                this.classList.add('minimize-label');
            });
            $input.addEventListener('blur', function () {
                if (this.value.trim() === '') {
                    this.classList.remove('minimize-label');
                }
            });
        }
        static get observedAttributes() {
            return ['disabled', 'readonly'];
        }
        attributeChangedCallback(attrName, oldValue, newValue) {
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
            if (this.hasAttribute('readonly')) {
                $input.setAttribute('readonly', '');
            }
            else {
                $input.removeAttribute('readonly');
            }
        }
    }
    customElements.define('fe-text', FormElementsText);
};
//# sourceMappingURL=_index.js.map