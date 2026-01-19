import React, { forwardRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const CreativeTemplate = forwardRef(({ data, color }, ref) => {
    const { personalInfo, experience, education, skills, customSections } = data;

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mx-auto overflow-hidden flex flex-col">
            {/* Header */}
            <div className={`p-8 text-white relative`} style={{ backgroundColor: color }}>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <div className="text-[150px] font-black leading-none">{personalInfo.fullName.charAt(0)}</div>
                </div>

                <div className="relative z-10 flex gap-6 items-center">
                    {/* Profile Image */}
                    {personalInfo.profileImage && (
                        <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white/30 shadow-lg shrink-0">
                            <img
                                src={personalInfo.profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">
                            {personalInfo.fullName}
                        </h1>
                        <p className="text-xl font-medium tracking-widest uppercase opacity-90">{personalInfo.jobTitle}</p>
                    </div>
                </div>
            </div>

            {/* Contact Bar */}
            <div className="bg-gray-900 text-white py-3 px-8 flex flex-wrap gap-6 text-sm items-center justify-center">
                {personalInfo.email && (
                    <div className="flex items-center gap-2">
                        <Mail size={16} className="text-gray-400" />
                        <span>{personalInfo.email}</span>
                    </div>
                )}
                {personalInfo.phone && (
                    <div className="flex items-center gap-2">
                        <Phone size={16} className="text-gray-400" />
                        <span>{personalInfo.phone}</span>
                    </div>
                )}
                {personalInfo.address && (
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span>{personalInfo.address}</span>
                    </div>
                )}
            </div>

            <main className="p-8 grid grid-cols-12 gap-8 flex-1">
                {/* Left Column */}
                <div className="col-span-12 md:col-span-8 space-y-8">
                    {/* Summary */}
                    {personalInfo.summary && (
                        <section>
                            <h2 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                                <span className="w-8 h-1 rounded-full" style={{ backgroundColor: color }}></span>
                                About Me
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                {personalInfo.summary}
                            </p>
                        </section>
                    )}

                    {/* Experience */}
                    {experience.length > 0 && (
                        <section>
                            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 rounded-full" style={{ backgroundColor: color }}></span>
                                Experience
                            </h2>
                            <div className="space-y-8">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="relative pl-6 border-l-2 border-gray-100">
                                        <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full`} style={{ backgroundColor: color }}></div>
                                        <div className="mb-2">
                                            <h3 className="text-lg font-bold text-gray-800">{exp.position}</h3>
                                            <div className="flex justify-between items-center text-sm mt-1">
                                                <span className="font-semibold" style={{ color }}>{exp.company}</span>
                                                <span className="text-gray-500 italic">{exp.startDate} - {exp.endDate}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Custom Sections */}
                {customSections && customSections.map((section) => (
                    <div key={section.id} className="col-span-12 md:col-span-8 space-y-8">
                        <section>
                            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 rounded-full" style={{ backgroundColor: color }}></span>
                                {section.title}
                            </h2>
                            <div className="space-y-8">
                                {section.items.map((item) => (
                                    <div key={item.id} className="relative pl-6 border-l-2 border-gray-100 flex gap-4">
                                        <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full`} style={{ backgroundColor: color }}></div>

                                        {item.image && (
                                            <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm mt-1">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            </div>
                                        )}

                                        <div className="flex-1">
                                            <div className="mb-2">
                                                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                                <div className="flex justify-between items-center text-sm mt-1">
                                                    <span className="font-semibold" style={{ color }}>{item.date}</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                ))}

                {/* Right Column */}
                <div className="col-span-12 md:col-span-4 space-y-8">
                    {/* Links */}
                    {(personalInfo.linkedin || personalInfo.website) && (
                        <section className="bg-gray-50 p-6 rounded-2xl">
                            <h2 className="text-sm font-black uppercase mb-4 text-gray-800 tracking-wider">Connect</h2>
                            <div className="space-y-3 text-sm">
                                {personalInfo.linkedin && (
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        <Linkedin size={16} style={{ color }} className="shrink-0" />
                                        <span className="truncate">{personalInfo.linkedin}</span>
                                    </div>
                                )}
                                {personalInfo.website && (
                                    <div className="flex items-center gap-2 overflow-hidden">
                                        <Globe size={16} style={{ color }} className="shrink-0" />
                                        <span className="truncate">{personalInfo.website}</span>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {skills.length > 0 && (
                        <section>
                            <h2 className="text-lg font-black uppercase mb-4 text-gray-800">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill.id}
                                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm"
                                        style={{ backgroundColor: color }}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education */}
                    {education.length > 0 && (
                        <section>
                            <h2 className="text-lg font-black uppercase mb-4 text-gray-800">Education</h2>
                            <div className="space-y-4">
                                {education.map((edu) => (
                                    <div key={edu.id} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <div className="font-bold text-gray-800 mb-1">{edu.degree}</div>
                                        <div className="text-sm font-medium" style={{ color }}>{edu.school}</div>
                                        <div className="text-xs text-gray-500 mt-2">{edu.startDate} - {edu.endDate}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
});

export default CreativeTemplate;
