/**
 * Creates an DOM element
 * @param {string} e The name of an element.
 * @param {object} parent parent element
 * @param {string|object} options text content or element to append
 * @returns {object} new element
 */
const create = (e, parent = false, options = false,) => {
    const el = document.createElement(e);
    if (typeof options == 'object') e.appendChild(options);
    else e == 'input' ? el.setAttribute('placeholder', options) : el.innerHTML = options
    if (typeof parent == 'object') parent.appendChild(el);
    return el;
}

$(() => {
    $.ajax({
        url: '../data/watchData.json', success: (res) => {
            console.log(res)
            Object.entries(res).forEach(([type, arr]) => {
                const tr = create('tr', $('#watchData')[0]);
                console.log(type)
                create('td', tr, type);
                Object.entries(arr).forEach(([key, value]) => {
                    create('td', tr, value[0])
                });
            });
        }
    });
});