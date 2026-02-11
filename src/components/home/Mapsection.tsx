import React from 'react';

export default function MapSection() {
    return (
        <section className="w-full">
            <iframe
                src="https://maps.google.com/maps?q=4/7+South+Madha+Church+Street,+Royapuram,+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location Map"
            ></iframe>
        </section>
    );
}