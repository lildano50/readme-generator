// This function renders a license bagde from a selected license. If "None" is selected, no badge is generated
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![Static Badge](https://img.shields.io/badge/${license}-blue)`;
  }
}

// This function creates licensing information if a license is selected. If "None" is selected, no info is returned.
function renderLicenseLink(license) {  
  if (license === "None") {
    return "";
  } else {
    return `Licensed under the ${license} license.`;
}
}

//This function creates the license section of the README.md file. If "None" is selected, no section is created.
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return "## Licenses";
  }
}

// This function generates the skeleton of the README.md file
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ${renderLicenseBadge(data.licenses)}

  ## Description:
  ${data.description}

  ## Table of Contents:
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Credits](#credits)\n
  - [Licenses](#licenses)\n

  ## Installation
  ${data.install}

  ## Usage
  ${data.instructions}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.licenses)}
  ${renderLicenseLink(data.licenses)}

  # Questions
  - Email: ${data.email} - Email for inquiries
  - Github: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
