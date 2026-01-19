import React, { forwardRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const ModernTemplate = forwardRef(({ data, color }, ref) => {
    const { personalInfo, experience, education, skills, customSections } = data;

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white p-8 shadow-2xl mx-auto" style={{ color: '#333' }}>
            {/* Header */}
            <header className="border-b-2 pb-6 mb-6 flex justify-between items-start" style={{ borderColor: color }}>
                <div className="flex-1">
                    <h1 className="text-4xl font-bold uppercase tracking-wider mb-2" style={{ color }}>
                        {personalInfo.fullName}
                    </h1>
                    <p className="text-xl font-medium text-gray-600 mb-4">{personalInfo.jobTitle}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        {personalInfo.email && (
                            <div className="flex items-center gap-1">
                                <Mail size={14} style={{ color }} />
                                <span>{personalInfo.email}</span>
                            </div>
                        )}
                        {personalInfo.phone && (
                            <div className="flex items-center gap-1">
                                <Phone size={14} style={{ color }} />
                                <span>{personalInfo.phone}</span>
                            </div>
                        )}
                        {personalInfo.address && (
                            <div className="flex items-center gap-1">
                                <MapPin size={14} style={{ color }} />
                                <span>{personalInfo.address}</span>
                            </div>
                        )}
                        {personalInfo.linkedin && (
                            <div className="flex items-center gap-1">
                                <Linkedin size={14} style={{ color }} />
                                <span>{personalInfo.linkedin}</span>
                            </div>
                        )}
                        {personalInfo.website && (
                            <div className="flex items-center gap-1">
                                <Globe size={14} style={{ color }} />
                                <span>{personalInfo.website}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Profile Image */}
                {personalInfo.profileImage && (
                    <div className="ml-6 flex-shrink-0">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2" style={{ borderColor: color }}>
                            <img
                                src={personalInfo.profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                )}
            </header>

            {/* Summary */}
            {personalInfo.summary && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b mb-3 pb-1" style={{ color, borderColor: color }}>
                        Professional Summary
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-700 text-justify">{personalInfo.summary}</p>
                </section>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b mb-4 pb-1" style={{ color, borderColor: color }}>
                        Work Experience
                    </h2>
                    <div className="space-y-4">
                        {experience.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-800">{exp.position}</h3>
                                    <span className="text-sm font-medium" style={{ color }}>
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-gray-600">{exp.company}</span>
                                    <span className="text-xs text-gray-500 italic">{exp.location}</span>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line text-justify">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {education.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b mb-4 pb-1" style={{ color, borderColor: color }}>
                        Education
                    </h2>
                    <div className="space-y-3">
                        {education.map((edu) => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-800">{edu.school}</h3>
                                    <span className="text-sm font-medium" style={{ color }}>
                                        {edu.startDate} - {edu.endDate}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-700">
                                    {edu.degree}
                                </div>
                                <div className="text-xs text-gray-500 italic">{edu.location}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {skills.length > 0 && (
                <section>
                    <h2 className="text-lg font-bold uppercase border-b mb-4 pb-1" style={{ color, borderColor: color }}>
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill.id}
                                className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200"
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Custom Sections */}
            {customSections && customSections.length > 0 && (
                <div className="mt-8">
                    {customSections.map((section) => (
                        <section key={section.id} className="mb-6">
                            <h2 className="text-lg font-bold uppercase border-b mb-4 pb-1" style={{ color, borderColor: color }}>
                                {section.title}
                            </h2>
                            <div className="space-y-4">
                                {section.items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        {item.image && (
                                            <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-gray-200">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="font-bold text-gray-800">{item.title}</h3>
                                                <span className="text-sm font-medium" style={{ color }}>{item.date}</span>
                                            </div>
                                            <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line text-justify">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
});

export default ModernTemplate;
