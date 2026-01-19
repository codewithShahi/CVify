import React, { forwardRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const ProfessionalTemplate = forwardRef(({ data, color }, ref) => {
    const { personalInfo, experience, education, skills, customSections } = data;

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white flex shadow-2xl mx-auto overflow-hidden">
            {/* Sidebar - Left Column */}
            <div className="w-1/3 p-6 text-white space-y-6" style={{ backgroundColor: color }}>
                <div className="text-center mb-8">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-4 font-bold border-4 border-white overflow-hidden">
                        {personalInfo.profileImage ? (
                            <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-4xl">{personalInfo.fullName.charAt(0)}</span>
                        )}
                    </div>
                    <h2 className="text-xl font-bold uppercase tracking-wider mb-2">Contact</h2>
                    <div className="w-10 h-1 bg-white/50 mx-auto mb-4"></div>
                </div>

                <div className="space-y-4 text-sm">
                    {personalInfo.email && (
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded">
                                <Mail size={14} />
                            </div>
                            <span className="break-all">{personalInfo.email}</span>
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded">
                                <Phone size={14} />
                            </div>
                            <span>{personalInfo.phone}</span>
                        </div>
                    )}
                    {personalInfo.address && (
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded">
                                <MapPin size={14} />
                            </div>
                            <span>{personalInfo.address}</span>
                        </div>
                    )}
                    {personalInfo.linkedin && (
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded">
                                <Linkedin size={14} />
                            </div>
                            <span className="break-all">{personalInfo.linkedin}</span>
                        </div>
                    )}
                    {personalInfo.website && (
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded">
                                <Globe size={14} />
                            </div>
                            <span className="break-all">{personalInfo.website}</span>
                        </div>
                    )}
                </div>

                {/* Education Sidebar */}
                {education.length > 0 && (
                    <div className="pt-6 border-t border-white/20">
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Education</h2>
                        <div className="space-y-4">
                            {education.map((edu) => (
                                <div key={edu.id}>
                                    <h3 className="font-bold">{edu.degree}</h3>
                                    <div className="text-white/80">{edu.school}</div>
                                    <div className="text-xs text-white/60 mt-1">
                                        {edu.startDate} - {edu.endDate}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Skills Sidebar */}
                {skills.length > 0 && (
                    <div className="pt-6 border-t border-white/20">
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill.id}
                                    className="px-2 py-1 rounded bg-white/20 text-xs font-medium"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content - Right Column */}
            <div className="w-2/3 p-8 bg-white">
                {/* Header */}
                <div className="mb-10 pt-4">
                    <h1 className="text-5xl font-extrabold uppercase tracking-tight text-gray-800 mb-2 leading-none">
                        {personalInfo.fullName}
                    </h1>
                    <p className="text-2xl font-light tracking-widest uppercase" style={{ color }}>{personalInfo.jobTitle}</p>
                </div>

                {/* Summary */}
                {personalInfo.summary && (
                    <div className="mb-8">
                        <h2 className="flex items-center text-xl font-bold uppercase mb-4 text-gray-800">
                            <span className="w-2 h-8 mr-3" style={{ backgroundColor: color }}></span>
                            Profile
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm text-justify">
                            {personalInfo.summary}
                        </p>
                    </div>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                    <div>
                        <h2 className="flex items-center text-xl font-bold uppercase mb-6 text-gray-800">
                            <span className="w-2 h-8 mr-3" style={{ backgroundColor: color }}></span>
                            Experience
                        </h2>
                        <div className="space-y-8 px-2 border-l-2 ml-1" style={{ borderColor: '#f3f4f6' }}>
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-6">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white" style={{ backgroundColor: color }}></div>

                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="text-lg font-bold text-gray-800">{exp.position}</h3>
                                        <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: color }}>
                                            {exp.startDate} - {exp.endDate}
                                        </span>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                                        {exp.company} | {exp.location}
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Custom Sections */}
                {customSections && customSections.map((section) => (
                    <div key={section.id}>
                        <h2 className="flex items-center text-xl font-bold uppercase mb-6 text-gray-800">
                            <span className="w-2 h-8 mr-3" style={{ backgroundColor: color }}></span>
                            {section.title}
                        </h2>
                        <div className="space-y-6 px-2 border-l-2 ml-1" style={{ borderColor: '#f3f4f6' }}>
                            {section.items.map((item) => (
                                <div key={item.id} className="relative pl-6 flex gap-4">
                                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white" style={{ backgroundColor: color }}></div>

                                    {item.image && (
                                        <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm mt-1">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                    )}

                                    <div className="flex-1">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                            <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: color }}>
                                                {item.date}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default ProfessionalTemplate;
