const portfolios = [
  {
    title: "Employee Attendance and Overtime Information System",
    thumbnail: "absenonline.png",
    detail: {
      preview: ["absenonline.png", "absenonline2.png", "absenonline3.png"],
      link: "https://github.com/preposterous-cat/absenonline",
      desc: `This website simplifies employee attendance by offering features for clocking in and out. It records
        attendance times and links them to the administrator for monitoring arrival times. Additionally, employees
        can submit overtime requests through the platform, which are then reviewed by the administrator for
        approval or rejection. Approved requests result in a salary bonus for the employee. The website is built using
        PHP MVC, Bootstrap 5, and MySQL.`,
    },
  },
  {
    title: "Inventory Management Website",
    thumbnail: "webinventaris.png",
    detail: {
      preview: [
        "webinventaris.png",
        "webinventaris1.png",
        "webinventaris2.png",
      ],
      link: "https://github.com/preposterous-cat/webinventaris",
      desc: `
      This website helps the company keep track of its inventory, 
      organizing items by suppliers, and offers three user roles: Secretary, who can view info and 
      generate reports on incoming and outgoing items; Staff, responsible for managing inventory and 
      supplier details; and Admin, who has full control over the website, including user roles and 
      permissions. Built with PHP MVC, Bootstrap 5, and MySQL, it is user-friendly for everyone involved.`,
    },
  },
  {
    title: "CovSegNet (Covid-19 Lung Infections Segmentation)",
    thumbnail: "covsegnet.png",
    detail: {
      preview: ["covsegnet.png", "covsegnet1.png", "covsegne2.png"],
      link: "https://github.com/preposterous-cat/Segnet-tensorflow",
      desc: `
      The research dives into exploring infections in Covid-19 patients using the SegNet method, a Fully
        Convolutional Neural Network. The main goal of the implementation is to segment CT-Scan images of the
        lungs from Covid-19 patients. This segmentation process categorizes images into three colors: gray
        (indicating infected areas), blue (for the left lung), and yellow (for the right lung). Technologies like Python,
        Tensorflow, Keras, Pandas, and Flask are utilized in both the research and project implementation.
        `,
    },
  },
  {
    title: "Profecta Perdana ERP System",
    thumbnail: "erp1.png",
    detail: {
      preview: ["erp1.png", "erp2.png", "erp3.png", "erp4.png"],
      link: "#",
      desc: `
      The ERP app streamlines business processes, offers real-time monitoring, and enables in-depth data analysis
        for CV Profecta Perdana. It integrates finance, HR, manufacturing, logistics, sales, and marketing functions
        into a unified platform. This allows seamless data sharing among authorized personnel, aiding informed
        decision-making. Developed using the Laravel full-stack framework and Bootstrap 5, the web-based ERP
        ensures a solid foundation. It leverages JavaScript (Ajax) and Datatable for enhanced functionality. Some
        features utilize external APIs like Indonesia's regional data API and Google Maps API, especially for geospatial
        aspects. In essence, the ERP optimizes operations, provides real-time monitoring, and empowers data-driven
        decision-making for CV Profecta Perdana.
        `,
    },
  },
  {
    title: "Content Management System for Company Profile",
    thumbnail: "cms1.png",
    detail: {
      preview: ["cms1.png", "cms2.png", "cms3.png", "cms4.png"],
      link: "https://profectaperdana.com",
      desc: `
      This project utilized NextJS technology to create an interactive and dynamic Company Profile Website. At its
        core is a content management system (CMS) built with Laravel, enabling easy content management for the
        client. The seamless integration of the CMS with the company profile via a RESTful API ensures smooth
        communication and data exchange between the systems. The final outcome is a user-friendly platform
        showcasing CV Profecta Perdana's brand and services effectively.
        `,
    },
  },
];

export default portfolios;
