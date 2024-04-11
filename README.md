# Automating-Visa-Appointment-Scheduling

## Overview
This project aims to automate the process of scheduling visa appointments by leveraging Cypress, Docker, JavaScript, and Shell Scripting. By utilizing these technologies, the solution efficiently finds and secures the latest available appointment dates, saving time and manual efforts.

## Features
* **Automated Scheduling:** Developed an automated solution using Cypress and Shell Scripting to reschedule visa appointments, ensuring the latest available date is always selected.
* **Efficient Testing:** Utilized Cypress to write tests that automatically navigate through the appointment scheduling site, capture selectors, and interact with elements to extract and compare appointment dates.
* **Optimized Process:** Optimized the scheduling process for finding the desired slot, minimizing manual intervention and maximizing efficiency.

## Pre Requisites
* **Docker:** This application relies on Docker to create isolated environments and manage its components efficiently. Please install Docker by following [the official documentation](https://docs.docker.com/get-docker/).

* **WSL2 (Windows Subsystem for Linux 2):** If you're using Windows, WSL2 is essential for running Docker containers seamlessly. First you need to [install your preferred Distro into WSL2](https://learn.microsoft.com/en-us/windows/wsl/install). Then start the WSL Console where you find yourself in a full Linux terminal. 

Open a terminal or command prompt and run the following command to check if Docker is installed and running correctly:
```bash
Docker --version
```

## Installation
To run the project:
* Download or clone this repository:
```bash
git clone https://github.com/joomla-projects/release-testing.git
```

* Click on the `start.exe` file to start working in a WSL console.
  
* Run this in the `start.exe` file:
```bash
./run.sh
```

## Under the hood
It will set up the visa site and subsequently, it prompts you for your **username and password**. It may take some time to establish a database connection, so please be patient. The setup comprises a folder `web servers` and a `run.sh` script. The automation is done with Cypress and the script can be found in the `web-server/tests/System/integration` folder. \
**Note:** The setup has been tested to ensure functionality and reliability but due to confidentiality reasons, credentials are not provided. Please ensure to provide your own credentials when setting up the project.

