# G-plus CRM Agency Data Export Script
This script simplifies exporting real estate agency data from the g-plus CRM (https://crm.g-plus.app/manage/agencies) into a structured JSON format. It streamlines the extraction process, reduces manual data entry, and prepares data for further use, such as importing into Google Sheets or analytics tools.
## 🚀 Features

* Automated extraction of real estate agencies from CRM page.

* Structured JSON format capturing:

  * Agency Name

  * Responsible Manager

  * Phone Number

  * Contact Person

  * Agency Website

  * Commission Details

  * Associated Objects

  * Lead Registration Link

* Error Handling to gracefully manage inconsistencies or missing fields.

* Immediate Data Visualization using console.table.

* Auto-copy JSON output to clipboard for convenience.

## 🛠️ How to Use

### Step-by-Step:

1. Open CRM Page:

    * Navigate to your CRM agency page: https://crm.g-plus.app/manage/agencies

2. Open Browser Console:

    * Press F12 or Ctrl+Shift+I in your browser (Chrome recommended).

    * Navigate to the Console tab.

3. Run the Script:

    * Paste the JavaScript snippet (script.js) provided in this repository directly into the console.

    * Press Enter to execute.

4. Verify and Use the Output:

    * View the extracted data via console.table.

    * The data is automatically copied to your clipboard in JSON format.
## 📋 Example Output
```[
  {
    "name": "Agency Name",
    "manager": "Manager Name",
    "phone": "@phone",
    "contactPerson": "Contact Person Name",
    "website": "https://agencywebsite.com",
    "commission": "5%",
    "objects": "Object Name (ID: 12345)",
    "leadsLink": "https://crm.g-plus.app/agency/unique-link"
  }
  // Additional agencies...
]
