import React from 'react';

const services = [
    {
        title: 'Web Development',
        description: 'Custom websites and web applications tailored to your business needs.',
    },
    {
        title: 'Mobile App Development',
        description: 'iOS and Android app development for your business or startup.',
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered design to create engaging and intuitive experiences.',
    },
];

const Services: React.FC = () => (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <h1>Our Services</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {services.map((service) => (
                <li key={service.title} style={{ marginBottom: '2rem' }}>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default Services;