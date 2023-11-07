<template>
    <div class="about-section">
        <h2>About Me</h2>
    </div>
    <div class="row">
        <div class="column" s>
            <div class="card">
                <div class="container">
                    <h4>Schooling</h4>
                    <h6 class="title">Pink City Internation Academy, Jaipur, Rajasthan</h6>
                    <p>I have done my whole schooling (Nursery to 12th standard) from PCIA itself<br>
                        I had Science, Maths stream in Secondary School (11th and 12th Std.)
                    </p>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <div class="container">
                    <h4>College</h4>
                    <h6 class="title">Jaipur Engineering College and Research Centre</h6>
                    <p>I have done Engineering in Electronics and Communication Branch</p>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <div class="container" id="cont3">
                    <h4>Current Profession</h4>
                    <h6 class="title">LTIMindtree</h6>
                    <p>Currently working as Software Engineer</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

.container:hover {
    padding: 20px;
    cursor: pointer;
}

.column {
    float: left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 8px;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
}

.about-section {
    padding: 1px;
    text-align: center;
    background-color: #474e5d;
    color: white;
}

.container {
    padding: 0 16px;
}

.container:hover {
    cursor: pointer;
    transition: ease-in-out 0.3s;
}

.container::after,
.row::after {
    content: "";
    clear: both;
    display: table;
}


.row {
    margin: 10px;
}

.title {
    color: rgb(122, 17, 17);
}
</style>