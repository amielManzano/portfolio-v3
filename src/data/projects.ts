interface Project {
  title: string;
  subTitle: string;
  link: string;
  image: string;
  labels: string[];
  category?: "BUILD" | "DESIGN";
}

export const projects: Project[] = [
  {
    title: "Mice",
    subTitle:
      "A travel quotation system for preparing and managing trip proposals, bringing itinerary details and pricing together in one place.",
    link: "https://www.jtbapac.com/solutions/mice.html",
    image: require("@/assets/projects/jtb.png"),
    labels: ["ReactJS", "Java", "AWS", "Figma"],
    category: "BUILD",
  },
  {
    title: "Badminton Queueing App",
    subTitle:
      "A badminton queue management app for organizing players, live courts, match history, and payments. Supports skill-based matching with fair rotation, auto-assignment, and manual match setup.",
    link: "https://stpqueue.vercel.app/",
    image: "https://stpqueue.vercel.app/assets/logo1-KJkLwfUJ.png",
    labels: ["React", "Firebase"],
    category: "BUILD",
  },
  {
    title: "Prock DX",
    subTitle:
      "Providing one-stop functionality necessary for the apparel industry, such as product production using 3D, merchandising, demand forecasting, and PR. Prock has become Japan's first all-purpose platform.",
    link: "https://goodvibesonly.jp/dx/",
    image: require("@/assets/projects/prock.png"),
    labels: ["NuxtJS", "Laravel", "AWS", "Firebase"],
  },
  {
    title: "Photography V2 UI Design",
    subTitle:
      "Elevate your visual storytelling with a UI design that puts your photography in the spotlight, capturing every moment with precision and style.",
    link: "https://www.figma.com/file/XcL4ynbdAcSYMNBB7dIJFm/Photography-Website?type=design&node-id=0-1&mode=design&t=TYqlgRjZD1ERV0xp-0",
    image: require("@/assets/projects/photographyV2Design.png"),
    labels: ["Figma"],
  },
  {
    title: "Uniel Online Store",
    subTitle:
      "A headless shopify online store. Shop smarter, faster, and easier with our online store app, bringing the world of retail to your fingertips.",
    link: "https://stayful.jp/",
    image: require("@/assets/projects/uniel.png"),
    labels: ["NextJS", "Shopify", "NodeJS", "nodemailer", "CMS"],
  },
  {
    title: "CSV download",
    subTitle:
      "A Shopify app where you can download CSV of any item by setting the template that you like.",
    link: "https://apps.shopify.com/csv-download-1?surface_detail=gf.e&surface_inter_position=1&surface_intra_position=3&surface_type=search",
    image: require("@/assets/projects/csvDownload.png"),
    labels: ["Shopify", "ReactJS", "sql", "AWS", "NodeJS"],
  },
  {
    title: "Bulk Images Upload",
    subTitle:
      "A Shopify app where you can easily upload product images all at once in a ZIP file. If you create a folder using the handle or product ID, the product image will be automatically determined and registered as a product.",
    link: "https://apps.shopify.com/bulk-images-upload?surface_detail=gf.e&surface_inter_position=1&surface_intra_position=4&surface_type=search",
    image: require("@/assets/projects/bulkImagesUpload.png"),
    labels: ["Shopify", "ReactJS", "Postgreql", "AWS", "NodeJS"],
  },
  {
    title: "Booking System",
    subTitle:
      "Effortlessly manage your reservations with our streamlined booking system, ensuring seamless organization and enhanced customer experiences.",
    link: "https://aem.trainee.gitlab.io/capstone-2-front-end/",
    image: require("@/assets/projects/bookingSystem.png"),
    labels: [
      "HTML",
      "CSS",
      "Javascript",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Atlas",
      "Gitlab",
      "Heroku",
    ],
  },
  {
    title: "Budget Tracking",
    subTitle:
      "Take control of your finances effortlessly with our intuitive budget tracking app, empowering you to achieve your financial goals with confidence.",
    link: "https://badjet-app.vercel.app/",
    image: require("@/assets/projects/budgetTracking.png"),
    labels: [
      "NextJS",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Heroku",
      "Google Login",
      "SMTP",
    ],
  },
  {
    title: "Portfolio V2 UI Design",
    subTitle:
      "Empower your professional journey with a portfolio UI design that speaks volumes about your skills and creativity, setting you apart from the crowd.",
    link: "https://www.figma.com/file/NoRFMv1Dm6sBbopWLfKtdJ/V3?type=design&node-id=0-1&mode=design",
    image: require("@/assets/projects/portfolioV3Design.png"),
    labels: ["Figma"],
  },
  // {
  //   title: "Portfolio V2 UI Design",
  //   subTitle:
  //     "Empower your professional journey with a portfolio UI design that speaks volumes about your skills and creativity, setting you apart from the crowd.",
  //   link: "https://www.figma.com/file/Fl6em464J6EH901XEEOMAj/portfolio?type=design&mode=design&t=kfe9KVDyozch4EIB-0",
  //   image: require("@/assets/projects/portfolioV2Design.png"),
  //   labels: ["Figma"],
  // },
  // {
  //   title: "Portfolio V2",
  //   subTitle:
  //     "Empower your professional journey with a portfolio UI design that speaks volumes about your skills and creativity, setting you apart from the crowd.",
  //   link: "https://aemportfolio.vercel.app/projects",
  //   image: require("@/assets/projects/portfolioV2.png"),
  //   labels: ["Nextjs", "Vercel", "Bootstrap"],
  // },
  {
    title: "Portfolio V1",
    subTitle:
      "Empower your professional journey with a portfolio UI design that speaks volumes about your skills and creativity, setting you apart from the crowd.",
    link: "https://amiel-manzano.vercel.app/",
    image: require("@/assets/projects/portfolioV1.png"),
    labels: ["Nextjs", "Vercel", "Bootstrap"],
    category: "DESIGN",
  },
  {
    title: "Nexstore",
    subTitle:
      "Discover the ultimate shopping experience with our online store app, where convenience meets style at your command.",
    link: "https://front-end-one-tawny.vercel.app/",
    image: require("@/assets/projects/nexstore.png"),
    labels: [
      "Gitlab",
      "NextJS",
      "NodeJS",
      "SMTP",
      "Paypal",
      "RapidAPI",
      "MongoDB",
    ],
  },
  {
    title: "Brass Life",
    subTitle:
      "This is made using Shopify. Adorn yourself with elegance from our jewelry store app, where every piece tells a story of beauty and craftsmanship.",
    link: "https://sobo-brass.com/",
    image: require("@/assets/projects/brassLife.png"),
    labels: ["Shopify", "Liquid", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Nuts Lab",
    subTitle:
      "This is made using Shopify. Elevate your snacking experience with our nut products store app, offering a delectable array of flavors and wholesome goodness",
    link: "https://nuts-lab.com/",
    image: require("@/assets/projects/nutsLab.png"),
    labels: ["Shopify", "Liquid", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Photography V1 UI Design",
    subTitle:
      "Elevate your visual storytelling with a UI design that puts your photography in the spotlight, capturing every moment with precision and style.",
    link: "https://aemphotography.github.io/website/",
    image: require("@/assets/projects/photographyV1.png"),
    labels: ["HTML", "CSS", "Javascript", "Github"],
  },
  {
    title: "Gym App",
    subTitle:
      "Unleash your potential with a gym app that tracks, motivates, and transforms every step of your fitness journey. Your goals, your way!",
    link: "https://aemgymapp.vercel.app/",
    image: require("@/assets/projects/gymapp.png"),
    labels: ["React", "Typescript", "Tailwind", "Framer Motion"],
    category: "DESIGN",
  },
  {
    title: "Design Project",
    subTitle:
      "The Development of Crop Management and Inventory System for Mushroom Farmers - firmware/hardware developer",
    link: "https://www.facebook.com/groups/256184368395441/permalink/520636595283549/",
    image: require("@/assets/projects/designProject.jpg"),
    labels: ["HTML", "CSS", "Javascript", "PHP", "C", "Microcontrollers"],
    category: "BUILD",
  },
];
