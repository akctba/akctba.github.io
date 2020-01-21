// Get the modal
var modal = document.getElementById("myModal");

// Get the elements that opens the modal
var exps = document.getElementsByClassName("expItem");

// Set the function for each element
Array.prototype.forEach.call(exps, function(el) {
    el.onclick = function () {

        let container = document.getElementById("modal-container");

        let iframe = document.createElement('iframe');
        iframe.setAttribute('class', 'expFrame');
        iframe.setAttribute('src', 'exp/' + el.id + '.html');

        container.appendChild(iframe);
        modal.style.display = "block";
    }

});

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    // removes the previous iframe
    let container = document.getElementById("modal-container");
    container.innerHTML = '';
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        // removes the previous iframe
        let container = document.getElementById("modal-container");
        container.innerHTML = '';
        modal.style.display = "none";
    }
}