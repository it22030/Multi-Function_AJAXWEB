function loadStudents(facultyCode) {
    // AJAX Request
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.json", true);

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var data = JSON.parse(this.responseText);

                // Get selected faculty
                var faculty = data[facultyCode];
                var outputDiv = document.getElementById("output");

                // Clear previous output
                outputDiv.innerHTML = "";

                if (faculty) {
                    // Faculty name
                    var h3 = document.createElement("h3");
                    h3.textContent = faculty.name;
                    outputDiv.appendChild(h3);

                    // Departments list
                    var ul = document.createElement("ul");
                    faculty.departments.forEach(function(dept){
                        var li = document.createElement("li");
                        li.textContent = dept;
                        ul.appendChild(li);
                    });

                    outputDiv.appendChild(ul);
                } else {
                    outputDiv.textContent = "No data found for this faculty!";
                }

            } else {
                console.error("Failed to load JSON. Status:", this.status);
            }
        }
    };

    xhttp.send();
}
