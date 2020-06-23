class Vendors {
    constructor(){
        this.vendorsData = []
        this.adapter = new VendorsAdapter()
        this.createVendorForm()
        // this.bindToVendorForm()
        this.fetchAndLoadVendors()
        this.fetchAndPostVendors()
        
    }

    

    createVendorForm(){
        window.addEventListener('DOMContentLoaded', ()=>{
           
            this.vendorsContainer = document.getElementById("create_new_vendor")
            
            // CREATING FORM
            this.vendorForm = document.createElement("form")
            this.vendorForm.setAttribute("class","vendor_form")
            this.vendorsContainer.appendChild(this.vendorForm)
            

            //1:  NAME ===========================
            this.vendorName = document.createElement("div")
            this.vendorName.setAttribute("class", "vendor-name")
            this.vendorForm.appendChild(this.vendorName)
                //  label:
                this.vendorNameLabel = document.createElement("label")
                this.vendorNameLabel.innerHTML = "Enter vendor/customer name: "
                this.vendorName.appendChild(this.vendorNameLabel)
                // input field:
                this.vendorNameField = document.createElement('input')
                this.vendorNameField.setAttribute("type","text")
                this.vendorNameField.setAttribute("id","name-input-field")
                this.vendorName.appendChild(this.vendorNameField)
            

            
            // 2: ADDRESS ==============================
            this.vendorAddress = document.createElement("div")
            this.vendorAddress.setAttribute("class", "vendor-address")
            this.vendorForm.appendChild(this.vendorAddress)
                // label:
                this.vendorAddressLabel = document.createElement("label")
                this.vendorAddressLabel.innerHTML = "Enter vendor/customer address: "
                this.vendorAddress.appendChild(this.vendorAddressLabel)
                // input field:
                this.vendorAddressField = document.createElement('input')
                this.vendorAddressField.setAttribute("type","text")
                this.vendorAddressField.setAttribute("id","address-input-field")
                this.vendorAddress.appendChild(this.vendorAddressField)
            
            
            
            // 3: ZIPCODE ==============================
            this.vendorZipCode = document.createElement("div")
            this.vendorZipCode.setAttribute("class", "vendor-zip-code")
            this.vendorForm.appendChild(this.vendorZipCode)
                // label:
                this.vendorZipCodeLabel = document.createElement("label")
                this.vendorZipCodeLabel.innerHTML = "Enter vendor/customer zipcode: "
                this.vendorZipCode.appendChild(this.vendorZipCodeLabel)
                // input field:
                this.vendorZipCodeField = document.createElement('input')
                this.vendorZipCodeField.setAttribute("type","text")
                this.vendorZipCodeField.setAttribute("id","zipcode-input-field")
                this.vendorZipCode.appendChild(this.vendorZipCodeField)
           
        
            
             // 4: EMAIL ===============================
            this.vendorEmail = document.createElement("div")
            this.vendorEmail.setAttribute("class", "vendor-email")
            this.vendorForm.appendChild(this.vendorEmail)
                // label:
                this.vendorEmailLabel = document.createElement("label")
                this.vendorEmailLabel.innerHTML = "Enter vendor/customer Email: "
                this.vendorEmail.appendChild(this.vendorEmailLabel)
                // input field:
                this.vendorEmailField = document.createElement('input')
                this.vendorEmailField.setAttribute("type","email")
                this.vendorEmailField.setAttribute("id","email-input-field")
                this.vendorEmail.appendChild(this.vendorEmailField)
           
            
            // 5: CONTACT-NUMBER ========================
            this.vendorContactNumber = document.createElement("div")
            this.vendorContactNumber.setAttribute("class", "vendor-contact-number")
            this.vendorForm.appendChild(this.vendorContactNumber)
                // label:
                this.vendorContactNumberlLabel = document.createElement("label")
                this.vendorContactNumberlLabel.innerHTML = "Enter vendor/customer Phone Number: "
                this.vendorContactNumber.appendChild(this.vendorContactNumberlLabel)
                // input field:
                this.vendorContactNumberField = document.createElement('input')
                this.vendorContactNumberField.setAttribute("type","text")
                this.vendorContactNumberField.setAttribute("id","contact-number-input-field")
                this.vendorContactNumber.appendChild(this.vendorContactNumberField)
            


            // 6: SUBMIT ================================
            this.vendorSubmitButton = document.createElement('input')
            this.vendorSubmitButton.setAttribute("type","submit")
            this.vendorSubmitButton.setAttribute("class","btn btn-primary")
            this.vendorSubmitButton.setAttribute("id","new-vendor-form-submittal")
            this.vendorForm.appendChild(this.vendorSubmitButton)
            this.vendorSubmitButton.addEventListener('submit', this.fetchAndPostVendors.bind(this))     
        })
    }

    // first you have to find where in your html elements your user is inputting their information:
    // bindToVendorForm(){
    //     // this.vendorsContainer = document.getElementsByClassName("vendor_form")
    //     this.vendorNameElement = document.getElementById("name-input-field")
    //     this.vendorAddressElement = document.getElementById("address-input-field")
    //     this.vendorZipCodeElement = document.getElementById("vendor-zip-code")
    //     this.vendorEmailElement = document.getElementById("vendor-email")
    //     this.contactNumberElement = document.getElementById("contact-number-input-field")

    
    // }

    postToDBAndThenRender(){
        const nameValue = this.vendorNameField.value
        const addressValue = vendorAddressField.value
        const zipcodeValue = vendorZipCodeField.value
        const emailValue = vendorEmailField.value
        const contactnumberValue = vendorContactNumberField.value

        this.adapter.postVendors(nameValue,addressValue,zipcodeValue,emailValue,contactnumberValue)
        .then(vendor => {
            this.vendorsData.push(new Vendor(vendor))
            this.renderVendors()
        })
            

        }
    }

    fetchAndLoadVendors(){
        // debugger
        this.adapter.getVendors()
        .then(vendors => {
            vendors.data.forEach(vendor => this.vendors.push(new Vendor(vendor)))
            console.log(this.vendors)
        }).then(()=>{
            this.renderVendors()
        })
    }

    fetchAndPostVendors(){

    }


    renderVendors(){
        const vendor_information = document.getElementById("vendor_card")
        this.vendorUl = document.createElement('ul')
        this.vendorUl.setAttribute("class","list-group list-group-flush")
        vendor_information.appendChild(this.vendorUl)
        
        this.vendorUl.innerHTML = this.vendors.map(vendor => vendor.renderVendorLi()).join('')    
    }         
}