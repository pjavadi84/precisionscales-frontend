class VendorsAdapter {
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/vendors"
        this.data = {}
    }

    getVendors(){
        return fetch(this.baseUrl).then(response => response.json()
        )  
    }

    async createVendor(vendorName, vendorAddress,vendorZipCode,vendorEmail,vendorPhoneNumber){
        const newVendorObject = {
            name: vendorName.value,
            address: vendorAddress.value,
            zipcode: vendorZipCode.value,
            email: vendorEmail.value,
            contact_number: vendorPhoneNumber.value
        }
        // debugger

        await fetch(this.baseUrl, {
            method: 'POST',
            // mode: 'no-cors',
            // headers: 'no-cache',
            // credentials: 'same-origin',
            headers: {
                'Content-Type' : 'application/json'
            },
            // redirect: 'follow',
            // referrerPolicy: 'no-referrer',
            body: JSON.stringify(newVendorObject)
        })
        // debugger
        .then(response => response.json())
        .then(newVendorObject => {
            console.log('Success:', newVendorObject);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
        // return fetch(this.baseUrl, {
        //     method: 'POST', 
        //     header: {'content_type': 'application/json'}, 
        //     body: JSON.stringify({newVendorObject})})
        // .then(response => response.json())      
    }
}