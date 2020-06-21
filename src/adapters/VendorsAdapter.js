class VendorsAdapter {
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/vendors"
    }

    getVendors(){
        return fetch(this.baseUrl).then(response => response.json())
    }
}