class Vendors {
    constructor(){
        this.vendors = []
        this.createVendorForm()
        this.createVendor()
        // this.fetchAndLoadVendors()
    }

    createVendorForm(){
        window.addEventListener('DOMContentLoaded', ()=>{
            console.log("DOM loaded")
    
            this.vendorsContainer = document.getElementById("create_new_vendor")
            
            this.vendorForm = document.createElement("form")
            this.vendorForm.setAttribute("class","vendor_form")
            this.vendorsContainer.appendChild(this.vendorForm)
            this.vendorFormGroup = document.createElement("div")
            this.vendorFormGroup.setAttribute("class","form_group")
            this.vendorForm.appendChild(this.vendorFormGroup)
            
            // adding name label
            this.vendorNameLabel = document.createElement("label")
            this.vendorNameLabel.innerHTML = "Enter your name: "
            this.vendorForm.appendChild(this.vendorNameLabel)

            // adding input field for name
            this.vendorNameField = document.createElement('input')
            this.vendorNameField.setAttribute("type","text", "id","name-input-field")
            this.vendorForm.appendChild(this.vendorNameField)

            // adding address
            // adding zipcode
            // adding email
            // adding contact_number
            // adding submit button
            this.vendorSubmitButton = document.createElement('input')
            this.vendorSubmitButton.setAttribute("type","submit")
            this.vendorForm.appendChild(this.vendorSubmitButton)
            this.vendorSubmitButton.addEventListener('submit', this.createVendor.bind(this))     
        })
    }

    createVendor(event){
            console.log("vendor submit button clicked");
    }
       
        
    
}