import http from 'k6/http';
export function WorkD() {  //GET
    const url = "https://workd.go.th/";
    const response = http.get(url);
    //console.log('Response body:', response.body);
    return response
}