export function sendAPIRequest(method,payload,url){
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(payload);

            var requestOptions = {
                method: method,
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

           return fetch(url, requestOptions)
            .then(response => response.text())
}
