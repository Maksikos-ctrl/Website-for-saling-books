import langArr from './langs.js';

const select = document.querySelector('select'),
        allLangs = ['en', 'ru', 'sk'];


document.addEventListener('DOMContentLoaded', () => {

    const changeUrl = () => {
        let lang = select.value;
        location.href = window.location.pathname + `#${lang}`;
        location.reload();
    };
    
    const changeLang = () => {
        let hash = window.location.hash;
        hash = hash.substring(1);
        console.log(hash);
        allLangs.includes(hash) ? console.log('Hash is here') :  location.href = window.location.pathname + `#en`;
        select.value = hash;
        // document.querySelector('title').innerHTML = langArr['icon'][hash];
    
        for (let key in langArr) {
            let el = document.querySelector('.lng-' + key);
            if (el) {
                el.innerHTML = langArr[key][hash];
            }

            // if (typeof el === 'undefined') {
            //     allLangs = 'en';
            //     // el.innerHTML = langArr[key][en];
            // }
        }
    };
    
    changeLang();
    
    select.addEventListener('change', changeUrl);
});


