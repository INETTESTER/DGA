import http from 'k6/http';
export function WorkD_Login() {  //GET
    const url = "https://workd.go.th/auth/login";
    const response = http.get(url);
    //console.log('Response body:', response.body);
    return response
}