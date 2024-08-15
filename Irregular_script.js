function addSubject() {
    const code = document.getElementById('subject-code').value;
    const name = document.getElementById('subject-name').value;
    const units = document.getElementById('units').value;

    if (code && name && units) {
        let table = document.getElementById('subjects-table');

        if (!table) {
            table = document.createElement('table');
            table.id = 'subjects-table';
            table.innerHTML = `
                <tr>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>Units</th>
                    <th>Action</th>
                </tr>
            `;
            document.getElementById('subjects-list').innerHTML = ''; // Clear the "No subjects added yet." text
            document.getElementById('subjects-list').appendChild(table);
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${code}</td>
            <td>${name}</td>
            <td>${units}</td>
            <td><button onclick="deleteSubject(this)" class="delete-btn">Delete</button></td>
        `;
        table.appendChild(row);

        document.getElementById('subject-code').value = '';
        document.getElementById('subject-name').value = '';
        document.getElementById('units').value = '';
    } else {
        alert('Please fill in all the fields.');
    }
}

function deleteSubject(button) {
    const row = button.parentElement.parentElement;
    row.remove();

    const table = document.getElementById('subjects-table');
    if (table.rows.length === 1) {
        document.getElementById('subjects-list').innerHTML = '<p>No subjects added yet.</p>';
    }
}
