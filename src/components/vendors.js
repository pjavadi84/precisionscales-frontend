class Vendors {
    constructor(){
        this.vendors = []
        this.adapter = new VendorsAdapter()
        this.createVendorForm()
        this.fetchAndLoadVendors()
    }

    

    createVendorForm(){
        window.addEventListener('DOMContentLoaded', ()=>{
            console.log("This is for creating a new form")

            
           
            var br = document.createElement("br");
           
    
            this.vendorsContainer = document.getElementById("create_new_vendor")
            
            // CREATING FORM
            this.vendorForm = document.createElement("form")
            this.vendorForm.setAttribute("class","vendor_form")
            this.vendorsContainer.appendChild(this.vendorForm)
            this.vendorFormGroup = document.createElement("div")
            this.vendorFormGroup.setAttribute("class", "form_group")
            this.vendorForm.appendChild(this.vendorFormGroup)

            //1:  NAME ===========================
            //  label:
            this.vendorNameLabel = document.createElement("label")
            this.vendorNameLabel.innerHTML = "Enter your name: "
            this.vendorForm.appendChild(this.vendorNameLabel)
            // input field:
            this.vendorNameField = document.createElement('input')
            this.vendorNameField.setAttribute("type","text")
            this.vendorNameField.setAttribute("id","name-input-field")
            this.vendorForm.appendChild(this.vendorNameField)
            
            

            
            // 2: ADDRESS ==============================
            // label:
            this.vendorAddressLabel = document.createElement("label")
            this.vendorAddressLabel.innerHTML = "Enter your address: "
            this.vendorForm.appendChild(this.vendorAddressLabel)
            // input field:
            this.vendorAddressField = document.createElement('input')
            this.vendorAddressField.setAttribute("type","text")
            this.vendorAddressField.setAttribute("id","address-input-field")
            this.vendorForm.appendChild(this.vendorAddressField)
            this.vendorAddressField.appendChild(br)
            
            
            
            // 3: ZIPCODE ==============================
            // label:
            this.vendorZipCodeLabel = document.createElement("label")
            this.vendorZipCodeLabel.innerHTML = "Zip Code: "
            this.vendorForm.appendChild(this.vendorZipCodeLabel)
            // input field:
            this.vendorZipCodeField = document.createElement('input')
            this.vendorZipCodeField.setAttribute("type","text")
            this.vendorZipCodeField.setAttribute("id","zipcode-input-field")

            this.vendorForm.appendChild(this.vendorZipCodeField)
            this.vendorZipCodeField.appendChild(br)
        
            
             // 4: EMAIL ===============================
            // label:
            this.vendorEmailLabel = document.createElement("label")
            this.vendorEmailLabel.innerHTML = "Email: "
            this.vendorForm.appendChild(this.vendorEmailLabel)
            // input field:
            this.vendorEmailField = document.createElement('input')
            this.vendorEmailField.setAttribute("type","email")
            this.vendorEmailField.setAttribute("id","email-input-field")
            this.vendorForm.appendChild(this.vendorEmailField)
            this.vendorEmailField.appendChild(br)
           
            
            
            // 5: CONTACT-NUMBER ========================
            // label:
            this.vendorContactNumberlLabel = document.createElement("label")
            this.vendorContactNumberlLabel.innerHTML = "Phone Number: "
            this.vendorForm.appendChild(this.vendorContactNumberlLabel)
            // input field:
            this.vendorContactNumberField = document.createElement('input')
            this.vendorContactNumberField.setAttribute("type","text")
            this.vendorContactNumberField.setAttribute("id","contact-number-input-field")
            this.vendorForm.appendChild(this.vendorContactNumberField)
            


            // 6: SUBMIT ================================
            this.vendorSubmitButton = document.createElement('input')
            this.vendorSubmitButton.setAttribute("type","submit")
            this.vendorForm.appendChild(this.vendorSubmitButton)
            this.vendorSubmitButton.addEventListener('submit', this.fetchAndPostVendors.bind(this))     
        })
    }

    fetchAndPostVendors(){
        
    }

    fetchAndLoadVendors(){
        this.adapter.getVendors()
        .then(vendors => {
            console.log(vendors)
        })
    }
       
        
    
}