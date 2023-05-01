import { html } from "./view.js"
import { createOrderHtml } from "./view.js";
import { createOrderData } from "./data.js";
import { COLUMNS } from "./data.js";
import { moveToColumn } from "./view.js";
import { updateDraggingHtml } from "./view.js";
import { updateDragging } from "./data.js";

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


// Add overlay 
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
    const form1 = createOrderHtml({ id: Id, title: title1, table: table1, created: Created })
    document.querySelector('[data-area="ordered"]').appendChild(form1)
    html.add.form.reset()
});


//Edit Overlay
const handleCancelEditToggle = (event) => {
    document.querySelector("[data-edit-overlay]").style.display = "none";
}
const handleDeleteEditToggle = (event) => {
    const del = document.querySelector(".order")
    del.remove()
    document.querySelector("[data-edit-overlay]").style.display = "none";
}
html.edit.delete.addEventListener('click', handleDeleteEditToggle)
html.edit.cancel.addEventListener('click', handleCancelEditToggle)
//check whatever I click has a dataset id, 
//if yes then use in querySelector
const onClick = (event) => {
   if(event.target.dataset.id){
   const id = event.target.dataset.id
   document.querySelector("[data-edit-overlay]").style.display = "block";

   const div = document.querySelector(`[data-id="${id}"]`);
   const title = div.querySelector('[data-order-title]').textContent;
   const table = div.querySelector('[data-order-table]').textContent;

   document.querySelector('[data-edit-title]').value = title
   document.querySelector('[data-edit-table]').value = table

    html.edit.form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent default form submission
    
        const formData = new FormData(event.target);
        const title2 = formData.get('title');
        const table2 = formData.get('table');
        const colomn12 = formData.get('column');

        const Order1 = document.querySelector(`[data-id="${id}"]`)
        Order1.querySelector('[data-order-table]').innerHTML = table2
        Order1.querySelector('[data-order-title]').innerHTML = title2
        document.querySelector("[data-edit-overlay]").style.display = "none";
        const newColomn = document.querySelector(`[data-column="${colomn12}"]`)
        moveToColumn(id, newColomn)
    });
   }
  }
  window.addEventListener('click', onClick);



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