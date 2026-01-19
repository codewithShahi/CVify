import React, { forwardRef } from 'react';

const SimpleTemplate = forwardRef(({ data }, ref) => {
    const { personalInfo, experience, education, skills, customSections } = data;

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white p-12 shadow-2xl mx-auto text-gray-900 font-serif">
            {/* Header */}
            <header className="text-center border-b-2 border-gray-900 pb-6 mb-8">
                <h1 className="text-4xl font-bold uppercase tracking-widest mb-3">
                    {personalInfo.fullName}
                </h1>
                <p className="text-md italic text-gray-600 mb-4">{personalInfo.jobTitle}</p>

                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                    {personalInfo.email && <span>{personalInfo.email}</span>}
                    {personalInfo.email && personalInfo.phone && <span>|</span>}
                    {personalInfo.phone && <span>{personalInfo.phone}</span>}
                    {personalInfo.phone && personalInfo.address && <span>|</span>}
                    {personalInfo.address && <span>{personalInfo.address}</span>}

                    {(personalInfo.linkedin || personalInfo.website) && <div className="w-full h-0 basis-full"></div>}

                    {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
                    {personalInfo.linkedin && personalInfo.website && <span>|</span>}
                    {personalInfo.website && <span>{personalInfo.website}</span>}
                </div>
            </header>

            {/* Content */}
            <div className="space-y-6">

                {/* Summary */}
                {personalInfo.summary && (
                    <section>
                        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 tracking-wider">Professional Summary</h2>
                        <p className="text-sm leading-relaxed text-justify">{personalInfo.summary}</p>
                    </section>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 tracking-wider">Experience</h2>
                        <div className="space-y-5">
                            {experience.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline font-bold">
                                        <h3 className="text-md">{exp.company}</h3>
                                        <span className="text-sm">{exp.startDate} – {exp.endDate}</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-2 italic">
                                        <span className="text-sm">{exp.position}</span>
                                        <span className="text-sm">{exp.location}</span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-justify">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {education.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 tracking-wider">Education</h2>
                        <div className="space-y-4">
                            {education.map((edu) => (
                                <div key={edu.id}>
                                    <div className="flex justify-between items-baseline font-bold">
                                        <h3 className="text-md">{edu.school}</h3>
                                        <span className="text-sm">{edu.startDate} – {edu.endDate}</span>
                                    </div>
                                    <div className="text-sm italic">
                                        {edu.degree}
                                    </div>
                                    <div className="text-sm text-gray-600">{edu.location}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 tracking-wider">Skills</h2>
                        <p className="text-sm leading-relaxed">
                            {skills.map(s => s.name).join(' • ')}
                        </p>
                    </section>
                )}
            </div>

            {/* Custom Sections */}
            {customSections && customSections.map((section) => (
                <section key={section.id} className="mt-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 tracking-wider">{section.title}</h2>
                    <div className="space-y-5">
                        {section.items.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                {item.image && (
                                    <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-gray-200 grayscale">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <div className="flex justify-between items-baseline font-bold">
                                        <h3 className="text-md">{item.title}</h3>
                                        <span className="text-sm">{item.date}</span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-justify mt-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
});

export default SimpleTemplate;
