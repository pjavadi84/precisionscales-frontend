class Vendors {
    constructor(){
        this.vendors = []
        this.createVendorForm()
        // this.fetchAndLoadVendors()
    }

    createVendorForm(){
        this.vendorsContainer = document.getElementById("create_new_vendor")
        this.vendorForm = document.createElement("div")
        this.vendorsContainer.appendChild(this.vendorForm)
        this.vendorNameLabel = document.createElement("label")
        this.vendorName = document.createTextNode("Enter your name: ")
        this.vendorForm.appendChild(this.vendorName)
        debugger
    }
}