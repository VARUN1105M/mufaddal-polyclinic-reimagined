
export interface ServiceData {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    image?: string;
    layout?: 'sidebar-left' | 'sidebar-right' | 'centered';
}

export const serviceData: Record<string, ServiceData> = {
    // Women Care Services
    'wellness': {
        title: 'Women Wellness',
        description: 'Comprehensive wellness programs designed specifically for women at every stage of life. Our holistic approach addresses physical, emotional, and mental health needs through personalized care plans.',
        features: ['Annual Health Screenings', 'Nutritional Counseling', 'Stress Management Workshops', 'Lifestyle Assessment'],
        benefits: ['Early detection of health issues', 'Improved energy and vitality', 'Personalized health roadmap', 'Holistic support system'],
        image: '/Women/Women Wellness.png',
        layout: 'sidebar-left'
    },
    'period-care': {
        title: 'Period Care',
        description: 'Expert care for menstrual health, addressing irregularities, pain, and other concerns. We provide diagnosis and treatment for various menstrual disorders to ensure your comfort and well-being.',
        features: ['Cycle Tracking Support', 'Pain Management Strategies', 'Hormonal Evaluation', 'Treatment of Menstrual Disorders'],
        benefits: ['Reduced menstrual pain', 'Regulated cycles', 'Better understanding of your body', 'Enhanced quality of life'],
        image: '/Women/Period Care.png',
        layout: 'sidebar-right'
    },
    'hormone-balance': {
        title: 'Hormone Balance',
        description: 'Specialized diagnosis and treatment for hormonal imbalances affecting mood, energy, and overall health. We use advanced testing and integrative therapies to restore hormonal harmony.',
        features: ['Comprehensive Hormone Panel', 'Bioidentical Hormone Therapy', 'Dietary Adjustments', 'Lifestyle Modifications'],
        benefits: ['Stabilized mood', ' increased energy levels', 'Improved sleep quality', 'Weight management support'],
        image: '/Women/Hormone Balance.png',
        layout: 'centered'
    },
    'pcos-care': {
        title: 'PCOS Care',
        description: 'Dedicated management programs for Polycystic Ovary Syndrome (PCOS). Our multidisciplinary team helps you manage symptoms, improve fertility, and reduce long-term health risks.',
        features: ['Metabolic Screening', 'Fertility Support', 'Customized Diet Plans', 'Skin and Hair Management'],
        benefits: ['Symptom control', 'Improved metabolic health', 'Fertility enhancement', 'Long-term risk reduction'],
        image: '/Women/PCOS Care.png',
        layout: 'sidebar-left'
    },
    'pregnancy': {
        title: 'Pregnancy Check',
        description: 'Complete prenatal care to ensure a healthy pregnancy for both mother and baby. From conception to delivery, we provide regular check-ups, monitoring, and guidance.',
        features: ['Regular Ultrasound Scans', 'Prenatal Screening', 'Nutritional Guidance for Pregnancy', 'Labor Preparation Classes'],
        benefits: ['Healthy fetal development', 'Early detection of complications', 'Confident birthing experience', 'Ongoing support'],
        image: '/Women/Pregnancy Check.png',
        layout: 'sidebar-right'
    },
    'postnatal': {
        title: 'Postnatal Care',
        description: 'Supportive care for new mothers during the recovery period after childbirth. We focus on physical recovery, lactation support, and adjusting to life with a newborn.',
        features: ['Post-delivery Health Checks', 'Lactation Consulting', 'Pelvic Floor Rehabilitation', 'Postpartum Depression Screening'],
        benefits: ['Faster physical recovery', 'Successful breastfeeding', 'Emotional support', 'Confidence in parenting'],
        image: '/Women/Postnatal Care.png',
        layout: 'centered'
    },
    'anemia-thyroid': {
        title: 'Anemia & Thyroid Management',
        description: 'Diagnosis and effective management of anemia and thyroid disorders common in women. We monitor your levels and adjust treatments to optimize your energy and metabolism.',
        features: ['Blood Panel Analysis', 'Thyroid Function Tests', 'Iron Deficiency Treatment', 'Medication Management'],
        benefits: ['Restored energy levels', 'Improved metabolism', 'Better cognitive function', 'Overall physical stability'],
        image: '/Women/Anemia & Thyroid Management.png',
        layout: 'sidebar-left'
    },
    'menopause': {
        title: 'Menopause Care',
        description: 'Compassionate care to navigate the transition of menopause. We offer treatments and lifestyle advice to manage symptoms and maintain health during this new life phase.',
        features: ['Symptom Management (Hot Flashes, etc.)', 'Bone Density Health', 'Hormone Replacement Therapy (if needed)', 'Heart Health Monitoring'],
        benefits: ['Relief from symptoms', 'Bone health protection', 'Emotional balance', 'Healthy aging'],
        image: '/Women/Menopause Care.png',
        layout: 'sidebar-right'
    },
    'breast-care': {
        title: 'Breast Care',
        description: 'Routine screenings and clinical exams for early detection of breast issues. We prioritize breast health education and provide swift referrals for further diagnostics if needed.',
        features: ['Clinical Breast Exams', 'Mammogram Referrals', 'Self-Exam Education', 'Benign Breast Condition Management'],
        benefits: ['Early detection', 'Peace of mind', 'Breast health awareness', 'Proactive care'],
        image: '/Women/Breast Care.png',
        layout: 'centered'
    },
    'mental-wellness': {
        title: 'Mental Wellness',
        description: 'Mental health support tailored for women, addressing anxiety, depression, and stress. Our safe space allows you to discuss your feelings and find effective coping strategies.',
        features: ['Individual Counseling', 'Stress & Anxiety Management', 'Postpartum Support', 'Mindfulness Training'],
        benefits: ['Emotional resilience', 'Better stress coping', 'Improved mental clarity', 'Balanced life'],
        image: '/Women/Mental Wellness.png',
        layout: 'sidebar-left'
    },

    // Supportive Care Services
    'physician': {
        title: 'General Physician',
        description: 'Primary healthcare services for diagnosing and treating common illnesses. Our general physicians are your first point of contact for all your health concerns.',
        features: ['General Health Checkups', 'Management of Acute Illnesses', 'Chronic Disease Monitoring', 'Health Education'],
        benefits: ['Comprehensive initial care', 'Timely diagnosis', 'coordinated care', 'Preventive advice'],
        image: '/Supportive Care Services/General Physician.png'
    },
    'dental': {
        title: 'Dental Care',
        description: 'Complete oral health services including checkups, cleaning, and treatments. We ensure your smile stays bright and your teeth remain healthy.',
        features: ['Routine cleanings', 'Cavity fillings', 'Root canal treatments', 'Cosmetic dentistry'],
        benefits: ['Healthy teeth and gums', 'Pain-free eating', 'Improved appearance', 'Prevention of oral diseases'],
        image: '/Supportive Care Services/Dental Care.png'
    },
    'physiotherapy': {
        title: 'Physiotherapy Care',
        description: 'Rehabilitative care to restore movement and function after injury or surgery. Our physiotherapists use manual therapy and exercises to help you recover.',
        features: ['Manual Therapy', 'Post-Op Rehabilitation', 'Sports Injury Treatment', 'Posture Correction'],
        benefits: ['Pain relief', 'Restored mobility', 'Improved strength', 'Faster recovery'],
        image: '/Supportive Care Services/Physiotherapy Care.png'
    },
    'ent': {
        title: 'ENT Care',
        description: 'Specialized care for Ear, Nose, and Throat conditions. From hearing loss to sinus issues, our specialists provide comprehensive diagnostics and treatments.',
        features: ['Hearing Assessments', 'Sinus Treatment', 'Throat exams', 'Allergy Management'],
        benefits: ['Clearer hearing', 'Relief from sinus pain', 'Improved breathing', 'Better sleep'],
        image: '/Supportive Care Services/ENT Care.png'
    },
    'diabetes': {
        title: 'Diabetes Care',
        description: 'Specialized management programs for Type 1 and Type 2 diabetes. We help you control blood sugar levels and prevent complications through lifestyle and medication.',
        features: ['Blood Sugar Monitoring', 'Dietary Planning', 'Insulin Management', 'Complication Screening'],
        benefits: ['Stable blood sugar', 'Reduced risk of complications', 'Healthy lifestyle', 'Empowered self-management'],
        image: '/Supportive Care Services/Diabetes Care.png'
    },
    'nutrition': {
        title: 'Nutrition Care',
        description: 'Personalized dietary planning to support health goals and manage medical conditions. Our nutritionists work with you to create sustainable eating habits.',
        features: ['Personalized Meal Plans', 'Weight Management', 'Medical Nutrition Therapy', 'Supplements Advice'],
        benefits: ['Improved overall health', 'Weight control', 'Better energy', 'Disease management'],
        image: '/Supportive Care Services/Nutrition Care.png'
    },
    'pain-management': {
        title: 'Pain Management',
        description: 'Multidisciplinary approach to managing chronic and acute pain. We aim to improve your quality of life by reducing pain through various therapies.',
        features: ['Medication Management', 'Physical Therapy Integration', 'Interventional Procedures', 'Pain Psychology'],
        benefits: ['Reduced pain intensity', 'Improved function', 'Better sleep', 'Enhanced well-being'],
        image: '/Supportive Care Services/Pain Management.png'
    },
    'preventive': {
        title: 'Preventive Care',
        description: 'Proactive healthcare focused on disease prevention and health maintenance. Stay ahead of health issues with our comprehensive screening packages.',
        features: ['Annual Physicals', 'Vaccinations', 'Cancer Screenings', 'Health Risk Assessments'],
        benefits: ['Disease prevention', 'Early detection', 'Long-term health', 'Cost savings'],
        image: '/Supportive Care Services/Preventive Care.png'
    }
};
