const tabs = Array.from(document.getElementsByClassName('tab'));
const tab_content = Array.from(document.getElementsByClassName('tab__content'));

console.log(tabs.findIndex(element => {
    return element.classList.contains('tab_active')
}))

tabs.forEach(element => {
    element.addEventListener('click', function() {
        tabs.forEach(item => {
            item.classList.remove('tab_active');
        });
        element.classList.add('tab_active');
        tab_content.forEach(item => {
            item.classList.remove('tab__content_active');
        });
        tab_content[
            tabs.findIndex(el => {
                return el.classList.contains('tab_active');
            })
        ].classList.add('tab__content_active');
    })
})