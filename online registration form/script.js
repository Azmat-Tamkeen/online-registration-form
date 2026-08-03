document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    let photo = document.getElementById("photo").files[0];
    let sign = document.getElementById("sign").files[0];

    document.body.innerHTML = `
    <div class="container">

        <h1 class="success">✅ Registration Successful!</h1>
        <p class="message">Your application has been submitted successfully.</p>

        <div class="section-title">Candidate Details</div>

        <table class="output-table">
            <tr>
                <th>Field</th>
                <th>Details</th>
            </tr>

            <tr>
                <td>First Name</td>
                <td>${fname.value}</td>
            </tr>

            <tr>
                <td>Last Name</td>
                <td>${lname.value}</td>
            </tr>

            <tr>
                <td>Father Name</td>
                <td>${father.value}</td>
            </tr>

            <tr>
                <td>Mother Name</td>
                <td>${mother.value}</td>
            </tr>

            <tr>
                <td>Date of Birth</td>
                <td>${dob.value}</td>
            </tr>

            <tr>
                <td>Gender</td>
                <td>${gender.value}</td>
            </tr>

        </table>

        <div class="section-title">Educational Details</div>

        <table class="output-table">

            <tr>
                <th>Qualification</th>
                <th>Board/University</th>
                <th>Year</th>
                <th>Percentage/CGPA</th>
            </tr>

            <tr>
                <td>10th</td>
                <td>${board10.value}</td>
                <td>${year10.value}</td>
                <td>${cgpa10.value}</td>
            </tr>

            <tr>
                <td>12th</td>
                <td>${board12.value}</td>
                <td>${year12.value}</td>
                <td>${cgpa12.value}</td>
            </tr>

            <tr>
                <td>Graduation</td>
                <td>${boardGrad.value}</td>
                <td>${yearGrad.value}</td>
                <td>${cgpaGrad.value}</td>
            </tr>

        </table>

        <div class="section-title">Uploaded Files</div>

        <table class="output-table">

            <tr>
                <th>Document</th>
                <th>File Name</th>
            </tr>

            <tr>
                <td>Passport Photo</td>
                <td>${photo ? photo.name : ""}</td>
            </tr>

            <tr>
                <td>Signature</td>
                <td>${sign ? sign.name : ""}</td>
            </tr>

        </table>

    </div>
    `;
});