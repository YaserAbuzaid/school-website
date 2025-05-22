import React from 'react';
import prof from '../assets/prof.jpeg'
import profs from '../assets/profs.jpeg'
import profss from '../assets/profss.jpeg'







export default function Aboutteach() {
    const faculty = [
        {
            name: 'Prof. Oluwaseun Adebayo',
            title: 'Ph.D. in Artificial Intelligence from MIT',
            department: 'Computer Science',
            experience: '15+ Years Experience',
            image: prof,
            color: 'text-yellow-600 ',
        },
        {
            name: 'Prof. Chioma Okonkwo',
            title: 'Ph.D. in Business Analytics from Stanford',
            department: 'E-commerce',
            experience: '20+ Years Experience',
            image: profs,
            color: 'text-yellow-600',
        },
        {
            name: 'Prof. Bolajiade Adeleke',
            title: 'Ph.D. in Data Science from Berkeley',
            department: 'Data Science',
            experience: '18+ Years Experience',
            image: profss,
            color: 'text-yellow-600 ',
        },
    ];

    return (
        <section className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-sm text-yellow-600  font-semibold">🎓 Meet Our Faculty</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Learn from the Best</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our distinguished faculty brings real-world expertise and cutting-edge research to the classroom.
                    </p>
                </div>

                {/* Faculty Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {faculty.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
                        >
                            <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
                            <div className="p-6 space-y-2">
                                <span className={`text-sm font-medium ${member.color}`}>{member.department}</span>
                                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.title}</p>
                                <p className="text-xs text-gray-500">{member.experience}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};