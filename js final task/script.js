document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("dataForm");
  const dataTableBody = document.getElementById("dataTableBody");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Create a new row and cells
    const newRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const actionCell = document.createElement("td");

    // Fill cells with data
    nameCell.textContent = name;
    ageCell.textContent = age;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.addEventListener("click", function () {
      dataTableBody.removeChild(newRow);
    });

    // Append delete button to action cell
    actionCell.appendChild(deleteButton);

    // Append cells to the new row
    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(actionCell);

    // Append the new row to the table body
    dataTableBody.appendChild(newRow);

    // Reset form
    form.reset();
  });
});
