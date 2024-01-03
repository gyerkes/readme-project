function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "ISC":
        return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    case "Apache":
        return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "GPL":
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "BSD":
        return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    case "None":
        return "";
    default:
        return "";
    
  }
}




function renderLicenseSection(license) {
    switch (license) {
        case "MIT":
        return "[MIT](https://opensource.org/license/mit-0/)"


    case "ISC":
        return "[ISC](https://opensource.org/license/isc-license-txt/)" 


    case "Apache":
        return "[Apache](https://opensource.org/license/apache-2-0/)"


    case "GPL":
        return "[GPS](https://opensource.org/license/gpl-2-0/)"


    case "BSD":
        return "[BSD](https://opensource.org/license/bsd-3-clause/)"


  case "None":
      return "";
  default:
      return "";
}
}

function generateMarkdown(data) {
    let licenseBadge =renderLicenseBadge(data.license);
    let licenseDescription = renderLicenseSection(data.license);
    return `# ${data.title}

${licenseBadge}

${data.description}

## Table of Contents
* [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)

<a name="installation"/>

## Installation

${data.installation}

<a name="usage"/>

## Usage

${data.usage}

https://watch.screencastify.com/v/YJOGGH7krgkSm3MGBAyN

<a name="license"/>

## License

${licenseDescription}


<a name="Contributing"/>

## Contributing

${data.contributions}


<a name="testing"/>

## Testing

${data.test}

<a name="questions"/>

## Questions

[Email me](mailto:${data.emailAddress})


`;
}

module.exports = generateMarkdown;
