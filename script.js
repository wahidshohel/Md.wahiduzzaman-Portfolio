/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [

    {
        id: 1,

        title: "E-Commerce Sales Analysis",

        technology: "Power BI",

        tools: "Power BI · DAX",

        description:
            "Analyzed a large-scale e-commerce dataset to evaluate sales performance, customer activity, revenue trends, and category performance.",

        image:
            "assets/screenshots/ecommerce-sales-dashboard.png",

        metrics: [
            ["40K", "Customers"],
            ["250K", "Orders"],
            ["312K", "Units Sold"],
            ["5.93B", "Revenue"],
            ["23.72K", "AOV"],
            ["4.14%", "Sales Growth"]
        ],

        insights: [
            "June was the peak revenue month at 0.71B.",
            "Electronics was the leading category with 83K units sold."
        ],

        methodology: [
            "Analyzed customer and sales performance.",
            "Built DAX-driven KPIs.",
            "Evaluated monthly revenue trends.",
            "Compared category performance.",
            "Analyzed customer activity and sales dynamics."
        ],

        github:
            "https://github.com/wahidshohel/ecommerce-sales-analysis-powerbi.git"
    },


    {
        id: 2,

        title: "Sales & Customer Analysis Dashboard",

        technology: "Power BI",

        tools:
            "Power BI · Power Query · DAX",

        description:
            "Built an interactive Power BI dashboard focused on customer analysis and sales performance, including monthly revenue trends, order status, top customers, and KPI reporting.",

        image:
            "assets/screenshots/sales-customer-dashboard.png",

        metrics: [],

        insights: [
            "Power Query was used for data transformation.",
            "DAX was used for calculated measures and analytical calculations.",
            "The report focuses on customer and sales performance."
        ],

        methodology: [
            "Data transformation using Power Query.",
            "Analytical calculations using DAX.",
            "KPI development.",
            "Customer analysis.",
            "Monthly revenue analysis.",
            "Sales performance reporting."
        ],

        github: "#"
    },


    {
        id: 3,

        title: "Sales Data Analysis & Business Reporting",

        technology: "SQL",

        tools:
            "SQL · JOINs · GROUP BY · Aggregate Functions · Subqueries",

        description:
            "Analyzed sales transactions, customers, products, regions, and revenue performance using SQL.",

        image: "",

        metrics: [],

        insights: [
            "Calculated total sales and order counts.",
            "Analyzed regional sales performance.",
            "Evaluated product and category performance.",
            "Identified top-selling products."
        ],

        methodology: [
            "SELECT",
            "WHERE",
            "ORDER BY",
            "GROUP BY",
            "JOINs",
            "Aggregate Functions",
            "Subqueries"
        ],

        github: "#"
    },


    {
        id: 4,

        title: "Sales & Distribution Analysis",

        technology: "Excel",

        tools:
            "Microsoft Excel · PivotTables",

        description:
            "Analyzed sales and delivery performance across dealers, representatives, outlets, territories, categories, brands, and products.",

        image:
            "assets/screenshots/sales-distribution-dashboard.png",

        metrics: [
            ["14K+", "Sales Records"],
            ["80", "Dealers"],
            ["187", "Representatives"],
            ["6.4K", "Outlets"],
            ["26", "Territories"],
            ["9.96M", "Order Value"],
            ["9.36M", "Delivered Value"],
            ["136K+", "Ordered Units"],
            ["119K+", "Delivered Units"]
        ],

        insights: [
            "Compared order value against delivered value.",
            "Analyzed territory-wise performance.",
            "Evaluated category and brand performance.",
            "Built PivotTable-based reporting."
        ],

        methodology: [
            "PivotTable analysis.",
            "Territory performance analysis.",
            "Category analysis.",
            "Brand performance analysis.",
            "Sales and delivery reporting."
        ],

        github: "#"
    },


    {
        id: 5,

        title: "HR Analytics Dashboard",

        technology: "Excel",

        tools:
            "Microsoft Excel · KPI Reporting",

        description:
            "Analyzed employee data to understand workforce composition and attrition patterns.",

        image:
            "assets/screenshots/hr-analytics-dashboard.png",

        metrics: [
            ["1,470", "Employees"],
            ["1,233", "Current Employees"],
            ["237", "Attrition"],
            ["3", "Departments"],
            ["9", "Job Roles"]
        ],

        insights: [
            "Analyzed employee attrition.",
            "Evaluated salary and job satisfaction.",
            "Reviewed performance and overtime.",
            "Analyzed tenure and work-life balance."
        ],

        methodology: [
            "Workforce analysis.",
            "Attrition analysis.",
            "Salary analysis.",
            "Job satisfaction analysis.",
            "Performance analysis.",
            "Overtime analysis.",
            "Tenure analysis."
        ],

        github: "#"
    }

];


/* =====================================================
   PROJECT RENDERING
===================================================== */

const projectsGrid =
    document.getElementById("projectsGrid");


function renderProjects(filter = "all") {

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter(
                project =>
                    project.technology === filter
            );


    projectsGrid.innerHTML = "";


    filteredProjects.forEach(project => {

        const card =
            document.createElement("article");

        card.className = "project-card";


        /* Image */

        let imageHTML = "";

        if (project.image) {

            imageHTML = `
                <img
                    src="${project.image}"
                    alt="${project.title} dashboard preview"
                    class="project-image"
                    loading="lazy"
                >
            `;

        } else {

            imageHTML = `
                <div class="project-placeholder">
                    ${project.technology === "SQL"
                        ? "⌘"
                        : "▦"}
                </div>
            `;

        }


        /* Metrics */

        let metricsHTML = "";

        if (project.metrics.length > 0) {

            metricsHTML = `
                <div class="metrics">

                    ${project.metrics
                        .slice(0, 6)
                        .map(metric => `
                            <div class="metric">

                                <strong>
                                    ${metric[0]}
                                </strong>

                                <small>
                                    ${metric[1]}
                                </small>

                            </div>
                        `)
                        .join("")}

                </div>
            `;

        }


        /* GitHub */

        let githubHTML = "";

        if (project.github !== "#") {

            githubHTML = `
                <a
                    href="${project.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>
            `;

        }


        card.innerHTML = `

            ${imageHTML}

            <div class="project-body">

                <span class="project-tech">
                    ${project.technology}
                </span>

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>

                ${metricsHTML}

                <div class="project-actions">

                    <button
                        class="view-project"
                        data-id="${project.id}"
                    >
                        View Project ↗
                    </button>

                    ${githubHTML}

                </div>

            </div>

        `;


        projectsGrid.appendChild(card);

    });


    /* Attach modal buttons */

    document
        .querySelectorAll(".view-project")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const projectId =
                        Number(button.dataset.id);

                    openProject(projectId);

                }
            );

        });

}


/* =====================================================
   PROJECT FILTERS
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                btn =>
                    btn.classList.remove("active")
            );

            button.classList.add("active");


            const filter =
                button.dataset.filter;

            renderProjects(filter);

        }
    );

});


/* =====================================================
   PROJECT MODAL
===================================================== */

const modal =
    document.getElementById("projectModal");

const modalBody =
    document.getElementById("modalBody");

const closeModal =
    document.getElementById("closeModal");


function openProject(projectId) {

    const project =
        projects.find(
            item => item.id === projectId
        );


    if (!project) {
        return;
    }


    let metricsHTML = "";

    if (project.metrics.length > 0) {

        metricsHTML = `

            <div class="metrics">

                ${project.metrics
                    .map(metric => `
                        <div class="metric">

                            <strong>
                                ${metric[0]}
                            </strong>

                            <small>
                                ${metric[1]}
                            </small>

                        </div>
                    `)
                    .join("")}

            </div>

        `;

    }


    let imageHTML = "";

    if (project.image) {

        imageHTML = `
            <img
                src="${project.image}"
                alt="${project.title} dashboard"
                loading="lazy"
            >
        `;

    }


    const insightsHTML =
        project.insights
            .map(
                insight =>
                    `<li>${insight}</li>`
            )
            .join("");


    const methodologyHTML =
        project.methodology
            .map(
                item =>
                    `<li>${item}</li>`
            )
            .join("");


    let githubHTML = "";

    if (project.github !== "#") {

        githubHTML = `
            <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
            >
                Open GitHub ↗
            </a>
        `;

    }


    modalBody.innerHTML = `

        <span class="project-tech">
            ${project.technology}
        </span>

        <h2>
            ${project.title}
        </h2>

        <p>
            ${project.description}
        </p>

        ${imageHTML}

        <h4>
            Tools
        </h4>

        <p>
            ${project.tools}
        </p>

        ${metricsHTML}

        <h4>
            Key Insights
        </h4>

        <ul>
            ${insightsHTML}
        </ul>

        <h4>
            Methodology & Analysis
        </h4>

        <ul>
            ${methodologyHTML}
        </ul>

        <div style="margin-top:25px">
            ${githubHTML}
        </div>

    `;


    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


/* =====================================================
   CLOSE MODAL
===================================================== */

closeModal.addEventListener(
    "click",
    closeProjectModal
);


function closeProjectModal() {

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeProjectModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProjectModal();

        }

    }
);


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navigation =
    document.getElementById("navigation");


menuBtn.addEventListener(
    "click",
    () => {

        navigation.classList.toggle("active");

    }
);


document
    .querySelectorAll("#navigation a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove(
                    "active"
                );

            }
        );

    });


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    element =>
        revealObserver.observe(element)
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            formStatus.textContent =
                "Please complete all fields.";

            return;

        }


        const mailSubject =
            encodeURIComponent(subject);


        const mailBody =
            encodeURIComponent(
                `Name: ${name}\n\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`
            );


        formStatus.textContent =
            "Opening your email application...";


        window.location.href =
            `mailto:whidshohel70@gmail.com` +
            `?subject=${mailSubject}` +
            `&body=${mailBody}`;

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

renderProjects("all");
