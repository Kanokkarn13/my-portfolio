export interface Project {
    id: string;
    title: string;
    role: string;
    year: string;
    cover: string;
    tags: string[];
    summary: string;
    body: string[];
    links: { label: string; href: string }[];
}

export const PROJECTS: Project[] = [
    {
        id: "savings-account-opening-insights",
        title: "Savings Account Opening Insights",
        role: "Data Science • Classification",
        year: "2025",
        cover: "https://www.indusind.com/iblogs/wp-content/uploads/01_SA_iblog-Banners.jpg",
        tags: ["Python", "Scikit-learn", "Pandas", "SMOTE"],
        summary:
            "Developed a classification pipeline to analyze customer behavior related to savings account openings. Used XGBoost with other ML models, applied SMOTE for class imbalance, and tuned via GridSearchCV. Evaluated using accuracy and F1-score.",
        body: [
            "Built an end-to-end pipeline for customer behavior classification.",
            "Handled imbalance with SMOTE and optimized hyperparameters with GridSearchCV.",
            "Reported results with accuracy and F1, plus key insights for stakeholders."
        ],
        links: [
            { label: "GitHub", href: "https://github.com/Kanokkarn13/account-data" }
        ]
    },
    {
        id: "pawpal-chatbot",
        title: "PawPal Chatbot",
        role: "AI/ML • Chatbot",
        year: "2025",
        cover: "/img2.png",
        tags: ["Python", "Transformers", "LoRA", "Unsloth", "Flask", "React", "Google Colab"],
        summary:
            "An AI-powered chatbot that provides preliminary pet symptom assessments and veterinary guidance. Fine-tuned with DeepSeek-R1 and Distill-Qwen models using Unsloth and PEFT (LoRA).",
        body: [
            "Built inference + simple UI for chatting about pet symptoms.",
            "Fine-tuned base models (DeepSeek-R1, Distill-Qwen) with LoRA via Unsloth.",
            "Served with Flask backend and React frontend; experiments run on Colab."
        ],
        links: [
            { label: "GitHub", href: "https://github.com/Kanokkarn13/chatbotforpet-UI-main" }
        ]
    },
    {
        id: "carbon-footprint-tracker",
        title: "Carbon Footprint Tracker App",
        role: "Full-stack • Mobile",
        year: "2025",
        cover: "/carbon/hero.png",
        tags: ["TypeScript", "React Native (Expo)", "Node.js", "Express.js", "MySQL", "AWS"],
        summary:
            "Developed a full-stack mobile application to promote carbon reduction activities. Enables users to track emissions, set goals, earn rewards, and learn about climate responsibility.",
        body: [
            "Developed a React Native (Expo) mobile application with a Node.js/Express API and a MySQL database on AWS, featuring activity tracking, carbon-reduction goals, and educational content to encourage sustainable actions."
        ],
        links: [
            { label: "GitHub", href: "https://github.com/Kanokkarn13/carbon-clean-app" }
        ]

    }
];
