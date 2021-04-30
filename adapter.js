const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

export default function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) resolve(xhr.responseText);
                else reject('Извините, произошёл сбой. Мы уже разбираемся в проблеме.');
            }
        };

        console.log('Итоговый URL => ', `${API_URL}${url}`);
        xhr.open('GET', `${API_URL}${url}`, true);
        xhr.send();
    })
};


