class VendorsAdapter {
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/vendors"
        this.data = {}
    }

    getVendors(){
        return fetch(this.baseUrl).then(response => response.json())
    }

    postVendors(nameValue,addressValue, zipcodeValue,emailValue,contactNumberValue){
        const newVendorObject = {
            name: nameValue,
            address: addressValue,
            zip_code: zipcodeValue,
            email: emailValue,
            contact_number: contactNumberValue
        }

        return fetch(this.baseUrl, {method: 'POST', header: {'content_type': 'application/json'}, body: JSON.stringify(newVendorObject)})
        .then(resonse => response.json())
        
        
    }
}