/**
 * Creates an DOM element
 * @param {string} e The name of an element.
 * @param {object} parent parent element.
 * @param {string|object} options text content or element to append.
 * @returns {object} new element
 */
 const create = (e, parent = false, options = false) => {
    const el = document.createElement(e);
    if (typeof options == 'object') e.appendChild(options);
    else if(options != false) e == 'input' ? el.setAttribute('placeholder', options) : el.innerHTML = options;
    if (typeof parent == 'object') parent.appendChild(el);
    return el;
}