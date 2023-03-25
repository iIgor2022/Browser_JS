const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function() {
    if (this.readyState === this.DONE) {
        const recievedData = this.responseText;
        localStorage.setItem('preloader', recievedData);
        showCourses(JSON.parse(recievedData)['response']['Valute']);
    }
});

function showCourses(recievedData) {
    const items = document.querySelector('#items');
    while (items.firstChild) {
        items.removeChild(items.firstChild);
    };

    for (let value of Object.values(recievedData)) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <div class="item__code">
                ${value['CharCode']}   
            </div>
            <div class="item__value">
                ${value['Value']}
            </div>
            <div class="item__currency">
                руб.
            </div>    
        `;
        document.querySelector('#items').appendChild(item);
    };  
    document.querySelector('.loader').classList.remove('loader_active');
};

function loadData() {
    if (localStorage.getItem('preloader')) {
        try {
            showCourses(JSON.parse(localStorage.getItem('preloader'))['response']['Valute']);
        } catch (error) {
            alert('JSON.parse error');
        }    
    };
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.send();
};

window.onload = () => {
    loadData();
};
