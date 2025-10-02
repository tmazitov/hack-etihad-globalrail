import type Plan from "@/types/plan";

const plans: Array<Plan> = [
    {
        id: 1,
        title: 'Basic Plan', 
        price: "Free", 
        description: 'A simple plan for occasional travelers.', 
        imagePath: "/train_2.png",
        fullDescription: 'The Basic Plan is perfect for occasional travelers who need a simple and cost-effective way to explore our rail network. It offers a limited number of tickets per month, ideal for leisure trips without long-term commitments.'
    },
    { 
        id: 3,
        title: 'Business Plan', 
        price: '20 AED/month', 
        description: 'Tailored for professionals with unlimited travel, including meals and transfer services.', 
        imagePath: "/briefcase.png",
        fullDescription: 'The Business Plan provides unlimited travel, complimentary meals, and transfer services for professionals. It ensures a comfortable and efficient commute for work-related trips.'
    },
    { 
        id: 2,
        title: 'Tourist Plan', 
        price: '20 AED/month', 
        description: 'Ideal for tourists with one-way ticket per day.', 
        imagePath: "/tourist_2.png",
        fullDescription: 'The Tourist Plan is tailored for visitors, offering one-way tickets per day to explore the rail network conveniently. It is perfect for short-term stays and sightseeing.'
    },
    { 
        id: 4,
        title: 'Student Plan', 
        price: '10 AED/month', 
        description: 'Affordable travel for students with 12 tickets per month.', 
        imagePath: "/books.png",
        fullDescription: 'The Student Plan offers 12 tickets per month for just 10 AED. It is an affordable and convenient option for students commuting to their institutions.'
    },
];

export default plans;