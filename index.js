let countryList;
fetch("https://raw.githubusercontent.com/DylanVN23607/globlesolver/refs/heads/main/countrylist.json")
    .then(response => response.json())
    .then(data => countryList = data);

let decrypt;

fetch("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js")
    .then(response => response.text())
    .then(script => {
        eval(script);
        decrypt = (encryptedText, key) =>
            CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    })
    .then(() => {
        let countrySalt = null;
        fetch(`https://cors-test.landyvilla3-99d.workers.dev/`)
            .then(response => response.json())
            .then(data => {
                countrySalt = data;
                console.log(countrySalt);
                console.log(countryList)
            });

    });
