import React, { forwardRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const ElegantTemplate = forwardRef(({ data, color }, ref) => {
    const { personalInfo, experience, education, skills, customSections } = data;

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white p-10 shadow-2xl mx-auto flex flex-col items-center">
            {/* Border Container */}
            <div className="w-full h-full border-2 border-double border-gray-300 p-8 flex-1 flex flex-col">

                {/* Header */}
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-light uppercase tracking-[0.2em] mb-3 text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                        {personalInfo.fullName}
                    </h1>
                    <p className="text-lg font-medium tracking-widest text-gray-500 uppercase mb-6">{personalInfo.jobTitle}</p>

                    <div className="w-24 h-px bg-gray-300 mx-auto mb-6"></div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-light">
                        {personalInfo.email && (
                            <div className="flex items-center gap-1">
                                <Mail size={12} />
                                <span>{personalInfo.email}</span>
                            </div>
                        )}
                        {personalInfo.phone && (
                            <div className="flex items-center gap-1">
                                <Phone size={12} />
                                <span>{personalInfo.phone}</span>
                            </div>
                        )}
                        {personalInfo.address && (
                            <div className="flex items-center gap-1">
                                <MapPin size={12} />
                                <span>{personalInfo.address}</span>
                            </div>
                        )}
                        {personalInfo.linkedin && (
                            <div className="flex items-center gap-1">
                                <Linkedin size={12} />
                                <span>LinkedIn</span>
                            </div>
                        )}
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex-1 space-y-8">
                    {/* Summary */}
                    {personalInfo.summary && (
                        <section className="text-center max-w-2xl mx-auto">
                            <p className="text-md text-gray-700 leading-8 italic font-light">
                                "{personalInfo.summary}"
                            </p>
                        </section>
                    )}

                    <div className="grid grid-cols-1 gap-10">
                        {/* Experience */}
                        {experience.length > 0 && (
                            <section>
                                <h2 className="text-center text-xl font-normal uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
                                    <span className="h-px w-10 bg-gray-300"></span>
                                    Experience
                                    <span className="h-px w-10 bg-gray-300"></span>
                                </h2>
                                <div className="space-y-8 px-4">
                                    {experience.map((exp) => (
                                        <div key={exp.id} className="relative">
                                            <div className="flex justify-between items-end mb-2 border-b border-gray-100 pb-1">
                                                <h3 className="text-lg font-serif font-bold text-gray-800">{exp.company}</h3>
                                                <span className="text-sm font-light text-gray-500">{exp.startDate} - {exp.endDate}</span>
                                            </div>
                                            <div className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-2" style={{ color }}>{exp.position}</div>
                                            <p className="text-sm leading-relaxed text-gray-600 text-justify">
                                                {exp.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Custom Sections */}
                        {customSections && customSections.map((section) => (
                            <section key={section.id}>
                                <h2 className="text-center text-xl font-normal uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
                                    <span className="h-px w-10 bg-gray-300"></span>
                                    {section.title}
                                    <span className="h-px w-10 bg-gray-300"></span>
                                </h2>
                                <div className="space-y-8 px-4">
                                    {section.items.map((item) => (
                                        <div key={item.id} className="relative flex gap-6 items-start">
                                            {item.image && (
                                                <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm rotate-3 hover:rotate-0 transition-transform duration-300">
                                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-end mb-2 border-b border-gray-100 pb-1">
                                                    <h3 className="text-lg font-serif font-bold text-gray-800">{item.title}</h3>
                                                    <span className="text-sm font-light text-gray-500">{item.date}</span>
                                                </div>
                                                <p className="text-sm leading-relaxed text-gray-600 text-justify">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}

                        {/* Education & Skills */}
                        <div className="grid grid-cols-2 gap-8">
                            {education.length > 0 && (
                                <section>
                                    <h2 className="text-center text-lg font-normal uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">
                                        Education
                                    </h2>
                                    <div className="space-y-4">
                                        {education.map((edu) => (
                                            <div key={edu.id} className="text-center">
                                                <div className="font-serif font-bold text-gray-800">{edu.school}</div>
                                                <div className="text-sm italic text-gray-600 my-1">{edu.degree}</div>
                                                <div className="text-xs text-gray-400">{edu.startDate} - {edu.endDate}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {skills.length > 0 && (
                                <section>
                                    <h2 className="text-center text-lg font-normal uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">
                                        Expertise
                                    </h2>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill.id}
                                                className="px-3 py-1 border border-gray-200 text-xs font-medium text-gray-600"
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ElegantTemplate;
