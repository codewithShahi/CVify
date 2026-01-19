import React, { forwardRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const CompactTemplate = forwardRef(({ data, color }, ref) => {
    const { personalInfo, experience, education, skills, customSections } = data;

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white p-6 shadow-2xl mx-auto text-sm">
            {/* Header */}
            <div className="flex border-b-2 border-gray-800 pb-4 mb-4 items-center gap-6">
                {personalInfo.profileImage && (
                    <div className="w-20 h-20 rounded bg-gray-200 overflow-hidden shrink-0">
                        <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                )}
                <div className="flex-1">
                    <h1 className="text-3xl font-extrabold text-gray-900 uppercase leading-none mb-1">
                        {personalInfo.fullName}
                    </h1>
                    <p className="text-lg font-bold uppercase" style={{ color }}>{personalInfo.jobTitle}</p>
                </div>
                <div className="text-right text-xs space-y-1 text-gray-600">
                    {personalInfo.email && <div>{personalInfo.email}</div>}
                    {personalInfo.phone && <div>{personalInfo.phone}</div>}
                    {personalInfo.address && <div>{personalInfo.address}</div>}
                    {personalInfo.linkedin && <div>{personalInfo.linkedin}</div>}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {/* Main Column (2/3) */}
                <div className="col-span-2 space-y-5">

                    {/* Summary */}
                    {personalInfo.summary && (
                        <div className="mb-4">
                            <p className="text-gray-700 leading-snug text-justify">
                                {personalInfo.summary}
                            </p>
                        </div>
                    )}

                    {/* Experience */}
                    {experience.length > 0 && (
                        <section>
                            <h2 className="text-md font-bold uppercase border-b border-gray-300 mb-3 text-gray-800">Experience</h2>
                            <div className="space-y-4">
                                {experience.map((exp) => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between font-semibold text-gray-800">
                                            <span>{exp.position}</span>
                                            <span className="text-xs text-gray-500 self-center">{exp.startDate} - {exp.endDate}</span>
                                        </div>
                                        <div className="text-xs font-bold uppercase mb-1" style={{ color }}>{exp.company}, {exp.location}</div>
                                        <p className="text-xs text-gray-600 leading-relaxed text-justify">
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
                            <h2 className="text-md font-bold uppercase border-b border-gray-300 mb-3 text-gray-800">{section.title}</h2>
                            <div className="space-y-4">
                                {section.items.map((item) => (
                                    <div key={item.id} className="flex gap-3">
                                        {item.image && (
                                            <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden border border-gray-200">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="flex justify-between font-semibold text-gray-800">
                                                <span>{item.title}</span>
                                                <span className="text-xs text-gray-500 self-center">{item.date}</span>
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed text-justify mt-1">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Projects (Example placeholder if data existed, utilizing space) */}
                </div>


                {/* Sidebar Column (1/3) */}
                <div className="col-span-1 space-y-6 bg-gray-50 p-4 rounded -mt-2 h-full">
                    {/* Education */}
                    {education.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 text-gray-800 pb-1">Education</h2>
                            <div className="space-y-3">
                                {education.map((edu) => (
                                    <div key={edu.id}>
                                        <div className="font-bold text-gray-800">{edu.school}</div>
                                        <div className="text-xs text-gray-600">{edu.degree}</div>
                                        <div className="text-xs text-gray-400 mt-0.5">{edu.startDate} - {edu.endDate}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {skills.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 text-gray-800 pb-1">Skills</h2>
                            <ul className="space-y-1">
                                {skills.map((skill) => (
                                    <li key={skill.id} className="text-xs font-medium text-gray-700 flex items-center justify-between">
                                        <span>{skill.name}</span>
                                        {/* Optional visual indicator for level */}
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" style={{ backgroundColor: skill.level === 'Expert' ? color : 'transparent', border: `1px solid ${color}` }}></span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
});

export default CompactTemplate;
