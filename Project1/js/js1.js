const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const line1 = $('.line1');
const line2 = $('.line2');
const main = $('.main');
const useAPI = $('.use-api');

const textA = document.createElement("p");
textA.innerHTML = "a: ";
line1.appendChild(textA);

const inputA = document.createElement("input");
inputA.placeholder = "number a";
inputA.className = "inputUser";
line1.appendChild(inputA);

const textB = document.createElement("p");
textB.innerHTML = "b: ";
line2.appendChild(textB);

const inputB = document.createElement("input");
inputB.placeholder = "number b";
inputB.className = "inputPassword";
line2.appendChild(inputB);

const btnSubmit = document.createElement("button");
btnSubmit.innerHTML = "Submit";
btnSubmit.className = "btnSubmit";
main.appendChild(btnSubmit);

btnSubmit.addEventListener("click", function() {
    let a_value = parseInt(inputA.value);
    let b_value = parseInt(inputB.value);
    alert(a_value + " + " + b_value +" = " + (a_value + b_value));
});

const btnApi = document.createElement("button");
btnApi.innerHTML = "Show List API";
btnApi.className = "btn-api";
useAPI.appendChild(btnApi);

const addAPI = document.createElement("button");
addAPI.innerHTML = "Add API";
addAPI.className = "btn-add-api";
useAPI.appendChild(addAPI);

// event btn handle api
btnApi.addEventListener('click', function() {
    // search userID = 1
    fetch('https://jsonplaceholder.typicode.com/posts?userId=10')
    .then((response) => response.json())
    .then((data) => $(".table-data").innerHTML = data.map((dt) => {
        console.log(dt.userID);
        return `
            <table>
                <tr>
                    <th style="width:10%"> Id </th>
                    <th style="width:30%"> Title </th>
                    <th style="width:50%"> Body </th>
                    <th style="width:10%"> User ID </th>
                </tr>
                <tr>
                    <td>${dt.id}</td>
                    <td>${dt.title}</td>
                    <td>${dt.body}</td>
                    <td>${dt.userId}</td>
                </tr>
            </table>
        `;
    }).join(""));
});

addAPI.addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Tui ten la: ',
            body: 'Nguyen Thanh Nhan',
            userId: 10,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
});