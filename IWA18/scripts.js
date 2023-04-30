import { html } from "./view.js"
import { createOrderHtml } from "./view.js";
import { createOrderData } from "./data.js";
import { COLUMNS } from "./data.js";
import { moveToColumn } from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => { }
const handleDragEnd = (event) => { }


// Add overlay finished
const handleAddToggle = (event) => {
    document.querySelector("[data-add-overlay]").style.display = "block";
}
const handleCancelToggle = (event) => {
    document.querySelector("[data-add-overlay]").style.display = "none";
    html.add.form.reset()
}
html.other.add.addEventListener('click', handleAddToggle)
html.add.cancel.addEventListener('click', handleCancelToggle)
html.add.form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default form submission

    const Created = createOrderData(createOrderHtml).created
    const Id = createOrderData(createOrderHtml).id

    const formData = new FormData(event.target);
    const title1 = formData.get('title');
    const table1 = formData.get('table');

    document.querySelector("[data-add-overlay]").style.display = "none";
    const form1 = createOrderHtml({ id: Id, title: title1, table: table1, created: Created})
    console.log(form1)
    document.querySelector('[data-area="ordered"]').appendChild(form1)
    html.add.form.reset()
});
//finished Above continue to work below -------------------------------

//Edit Overlay
const handleEditToggle = (event) => {
    document.querySelector("[data-edit-overlay]").style.display = "block";
}
const handleCancelEditToggle = (event) => {
    document.querySelector("[data-edit-overlay]").style.display = "none";
}
const handleDeleteEditToggle = (event) => {
    //   const del = document.querySelector("[data-order-title] .order__details")
    //   del.remove()
    document.querySelector("[data-edit-overlay]").style.display = "none";
}
html.edit.form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default form submission

    const formData = new FormData(event.target);
    const colomn12 = formData.get('column');
    const newColomn2 = document.querySelector(`[data-column="${colomn12}"]`)
    html.columns['newColomn'] = newColomn2

    const colomnName = html.columns['newColomn'] = newColomn2
    moveToColumn(Id, colomnName)

});
html.edit.delete.addEventListener('click', handleDeleteEditToggle)
html.edit.cancel.addEventListener('click', handleCancelEditToggle)
//check if new order exists then displays the edit overlay when order is clicked
function getElementByIdWhenAvailable(id, callback) {
    const checkExist = setInterval(function () {
        const element = document.querySelector(id);
        if (element) {
            clearInterval(checkExist);
            callback(element);
            const bok = document.querySelector(".order")
            bok.addEventListener('click', handleEditToggle)
        }
    }, 10); // check every 100ms
}
getElementByIdWhenAvailable('[data-order-title]', function (element) {
    document.querySelector('[data-edit-title]').value = element.innerHTML
    // do something with the element once it exists
});
getElementByIdWhenAvailable('[data-order-table]', function (element) {
    console.log(element.innerHTML);
    //  document.querySelector('[data-edit-title]').value = element.innerHTML
    // do something with the element once it exists
});





//Help Layout
const handleHelpToggle = (event) => {
    document.querySelector("[data-help-overlay]").style.display = "block";
}
const handleHelpcloseToggle = (event) => {
    document.querySelector("[data-help-overlay]").style.display = "none";
}
html.help.cancel.addEventListener('click', handleHelpcloseToggle)
html.other.help.addEventListener('click', handleHelpToggle)

//rtthrhhhdg
for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}