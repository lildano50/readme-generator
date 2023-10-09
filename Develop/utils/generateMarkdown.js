// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![Static Badge](https://img.shields.io/badge/${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  
  if (license === "None") {
    return "";
  } else {
    return `Licensed under the ${license} license.`;
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return "## Licenses";
  }
}

// TODO: Create a function to generate markdown for README
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

  # Contact Information
  - Email: ${data.email} - Email for inquiries
  - Github: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
