const interest = document.querySelector('.interest');
const checkboxes = Array.from(document.querySelectorAll('.interest__check'));

checkboxes.forEach(element => {
    // f(element);
    // console.log(element.checked);
    element.addEventListener('change', function() {f(element)});
});

function f(el) {
    const label = el.closest('label');
    if (label.nextElementSibling) {
        console.log(label.nextElementSibling.querySelectorAll('.interest__check'));
        Array.from(label.nextElementSibling.querySelectorAll('.interest__check')).forEach(
            element => {
                element.checked = el.checked;
                f(element);
            }
        );
    }
};
