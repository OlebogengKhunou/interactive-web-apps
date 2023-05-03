import { html } from "./view.js"
import { createOrderHtml } from "./view.js";
import { createOrderData } from "./data.js";
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

    const form1 = createOrderHtml({ id: Id, title: title1, table: table1, created: Created })
    document.querySelector('[data-area="ordered"]').appendChild(form1)
    html.add.form.reset()
    document.querySelector("[data-add-overlay]").style.display = "none";
});


//Edit Overlay

//check whatever I click has a dataset id, 
//if yes then use in querySelector
const handleCancelEditToggle = (event) => {
    document.querySelector("[data-edit-overlay]").style.display = "none";
}

const handleEditToggle = (event) => {
    const overlay = html.edit.overlay;
    const formTitle = html.edit.title;
    const formTable = html.edit.table;
    const formColumn = html.edit.column;

    event.target.dataset.id ? overlay.style.display = "block" : undefined;
    const id = event.target.dataset.id;
    formTitle.value = event.target.dataset.id ? event.target.querySelector(".order__title").textContent: undefined;
    formTable.value = event.target.dataset.id ? event.target.querySelector(".order__value").textContent: undefined;
    const section = document.querySelector(`[data-id="${id}"]`);

    formColumn.value = section ? section.closest("section").dataset.area : "";
    html.edit.delete.id = id;
};

const handleEditSubmit = (event) => {
    event.preventDefault();
    const editId = html.edit.delete.id;
    const overlay = html.edit.overlay;

    const formData = new FormData(event.target);
    const title2 = formData.get('title');
    const table2 = formData.get('table');
    const colomn12 = formData.get('column');

    const Order1 = document.querySelector(`[data-id="${editId}"]`)
    Order1.querySelector('[data-order-table]').innerHTML = table2
    Order1.querySelector('[data-order-title]').innerHTML = title2
    
    const newColomn = document.querySelector(`[data-column="${colomn12}"]`)
    moveToColumn(editId, newColomn)
    event.target.reset();
    overlay.style.display = "none";
};

const handleDelete = (event) => {
    const idToBeDeleted = html.edit.delete.id;
    const orderToBeDeleted = document.querySelector(`[data-id="${idToBeDeleted}"]`);
    orderToBeDeleted.remove();
    const overlay = html.edit.overlay;
    overlay.style.display = "none";
};

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleCancelEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);


//Help Layout
const handleHelpToggle = (event) => {
    document.querySelector("[data-help-overlay]").style.display = "block";
}
const handleHelpcloseToggle = (event) => {
    document.querySelector("[data-help-overlay]").style.display = "none";
}
html.help.cancel.addEventListener('click', handleHelpcloseToggle)
html.other.help.addEventListener('click', handleHelpToggle)

//Dragging
//Dragged Handlers
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

let dragged;

const handleDragStart = (e) => {
    dragged = e.target;
};

const handleDragDrop = (e) => {
    e.target.append(dragged);
    e.preventDefault();
    const path = e.path || e.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            document.querySelector('[data-edit-column]').value = column
            break;
        }
    }
};

const handleDragEnd = (e) => {
    const background = e.target.closest("section");
    background.style.backgroundColor = "";

};

//Call Dragged Handlers
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener("dragover", handleDragOver);
    htmlArea.addEventListener("dragstart", handleDragStart);
    htmlArea.addEventListener("drop", handleDragDrop);
    htmlArea.addEventListener("dragend", handleDragEnd);
}

