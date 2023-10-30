// Define your projects as an array of objects
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1.",
        link: "https://project1link.com",
    },
    {
        title: "Project 2",
        description: "Description of project 2.",
        link: "https://project2link.com",
    },
    // Add more projects here
];

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById("project-list");

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectList.appendChild(projectDiv);
    });
}

// Call the function to display projects when the page loads
window.addEventListener("load", displayProjects);
