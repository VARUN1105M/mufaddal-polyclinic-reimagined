import { useEffect } from 'react';

const criticalImages = [
    '/doctor.png',
    '/About Us.png',
    '/About Us Detail.png',
    '/Appointment.png',
    '/Banner Section.png',
    '/hero-woman-transparent (2).png',
];

const secondaryImages = [
    '/doctor1.png', '/doctor2.png', '/doctor3.png', '/doctor4.png',
    '/doctor5.png', '/doctor6.png', '/doctor7.png', '/doctor8.png',
    '/doctor9.png', '/doctor10.png', '/doctor11.png', '/doctor12.png',
    '/Women/Women Wellness.png',
    '/Women/Period Care.png',
    '/Women/Hormone Balance.png',
    '/Women/PCOS Care.png',
    '/Women/Pregnancy Check.png',
    '/Women/Postnatal Care.png',
    '/Women/Anemia & Thyroid Management.png',
    '/Women/Menopause Care.png',
    '/Women/Breast Care.png',
    '/Women/Mental Wellness.png',
    '/Supportive Care Services/General Physician.png',
    '/Supportive Care Services/Dental Care.png',
    '/Supportive Care Services/Physiotherapy Care.png',
    '/Supportive Care Services/ENT Care.png',
    '/Supportive Care Services/Diabetes Care.png',
    '/Supportive Care Services/Nutrition Care.png',
    '/Supportive Care Services/Pain Management.png',
    '/Supportive Care Services/Preventive Care.png',
];

const ImagePrefetch = () => {
    useEffect(() => {
        const prefetch = async (url: string, priority: 'high' | 'low' = 'low') => {
            const img = new Image();
            if (priority === 'low') {
                // @ts-ignore - fetchPriority is supported in modern browsers
                img.fetchPriority = 'low';
            }
            img.src = url;
            try {
                await img.decode();
            } catch (e) {
                // Ignore decoding errors
            }
        };

        // Load critical UI assets immediately
        criticalImages.forEach(url => prefetch(url, 'high'));

        // Load heavy service images only when the browser is idle
        if ('requestIdleCallback' in window) {
            (window as any).requestIdleCallback(() => {
                secondaryImages.forEach((url, index) => {
                    // Stagger the secondary images to avoid network congestion
                    setTimeout(() => prefetch(url, 'low'), index * 100);
                });
            });
        }
    }, []);

    return null;
};

export default ImagePrefetch;
