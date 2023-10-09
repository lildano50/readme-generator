// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (String) {
    return license;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  
  if (String) {
    return license;
  } else {
    return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (String) {
    return '## Licenses'
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ## Description:
  ${data.description}

  ## Installation
  ${data.install}

  ## Instructions/Use
  ${data.instructions}

  ## Collaborators/Credits
  ${data.credits}

  ${renderLicenseSection}
  ${renderLicenseLink(data.licenses)}

  # Badges
  ${renderLicenseBadge(data.badges)}
`;
}

module.exports = generateMarkdown;
