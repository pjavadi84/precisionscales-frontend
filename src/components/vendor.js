class Vendor{
    constructor(vendorJSON){
        this.id = vendorJSON.id
        this.name = vendorJSON.attributes.name
        this.address = vendorJSON.attributes.address
        this.zipcode = vendorJSON.attributes.zipcode
        this.email = vendorJSON.attributes.email
        this.contact_number = vendorJSON.attributes.contact_number
    }

    renderVendorLi(){
        return `
            
                <div class="jumbotron jumbotron-fluid">
                        <li><strong>customer/vendor name:</strong> ${this.name}</li>   
                        <li><strong>address:</strong> ${this.address}</li>  
                        <li><strong>zipcode:</strong> ${this.zipcode}</li>  
                        <li><strong>email:</strong> ${this.email}</li>  
                        <li><strong>phone:</strong> ${this.contact_number}</li>  
                </div>
            
    
        `
    }
}