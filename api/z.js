import http from 'k6/http';
export function GetProfile() {  //GET
    const url = "https://script.google.com/macros/s/AKfycbwxf5AMB9on1zMhy63ej8gG82Dnrx40gPnSVvFK8VFExBXXi3zQEx1pC69v3-jniOLV/exec";
    const response = http.get(url);
    console.log('Response body:', response.body);
    return response
}