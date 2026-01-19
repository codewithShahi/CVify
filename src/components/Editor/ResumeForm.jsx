import { Trash2, Plus, ChevronDown, ChevronUp, Sparkles, Upload } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { useState, useRef } from 'react';
import { generateSummary, generateDescription } from '../../utils/aiGenerator';

const ResumeForm = () => {
    const {
        resumeData,
        updatePersonalInfo,
        updateProfileImage,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        updateSkill,
        removeSkill,
        addCustomSection,
        removeCustomSection,
        updateCustomSectionTitle,
        addCustomItem,
        removeCustomItem,
        updateCustomItem
    } = useResume();

    const [activeSection, setActiveSection] = useState('personal');
    const fileInputRef = useRef(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAiSummary = () => {
        const summary = generateSummary(resumeData.personalInfo.jobTitle || 'Professional');
        updatePersonalInfo('summary', summary);
    };

    const handleAiDescription = (id) => {
        const description = generateDescription('Professional');
        updateExperience(id, 'description', description);
    };

    return (
        <div className="space-y-6 pb-20">
            {/* Personal Info Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                    onClick={() => toggleSection('personal')}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                    <span className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors">Personal Information</span>
                    {activeSection === 'personal' ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                </button>

                {activeSection === 'personal' && (
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in border-t border-gray-100">
                        <div className="md:col-span-2 flex flex-col items-center gap-3 mb-4">
                            <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-md group-hover:border-primary-200 transition-colors relative bg-white">
                                    {resumeData.personalInfo.profileImage ? (
                                        <img
                                            src={resumeData.personalInfo.profileImage}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400">
                                            <Upload size={32} />
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-xs font-semibold">Change Photo</span>
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageUpload}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>
                            {resumeData.personalInfo.profileImage && (
                                <button
                                    onClick={() => updateProfileImage(null)}
                                    className="text-red-500 text-xs font-medium flex items-center gap-1 hover:bg-red-50 px-2 py-1 rounded transition-colors"
                                >
                                    <Trash2 size={14} />
                                    Remove Photo
                                </button>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                value={resumeData.personalInfo.fullName}
                                onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Job Title</label>
                            <input
                                type="text"
                                value={resumeData.personalInfo.jobTitle}
                                onChange={(e) => updatePersonalInfo('jobTitle', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                placeholder="Software Engineer"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={resumeData.personalInfo.email}
                                onChange={(e) => updatePersonalInfo('email', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="text"
                                value={resumeData.personalInfo.phone}
                                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                placeholder="+1 234 567 890"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                value={resumeData.personalInfo.address}
                                onChange={(e) => updatePersonalInfo('address', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                placeholder="City, Country"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Links</label>
                            <input
                                type="text"
                                value={resumeData.personalInfo.linkedin}
                                onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                placeholder="LinkedIn / Portfolio URL"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2 space-y-2 relative">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-gray-700">Professional Summary</label>
                                <button
                                    onClick={handleAiSummary}
                                    className="text-xs flex items-center gap-1 text-primary-600 font-semibold hover:text-primary-700 transition-colors cursor-pointer"
                                >
                                    <Sparkles size={14} /> Magic Write
                                </button>
                            </div>
                            <textarea
                                value={resumeData.personalInfo.summary}
                                onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none h-32"
                                placeholder="Write a brief summary of your professional background..."
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                    onClick={() => toggleSection('experience')}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                    <span className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors">Experience</span>
                    {activeSection === 'experience' ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                </button>

                {activeSection === 'experience' && (
                    <div className="p-6 space-y-6 animate-fade-in border-t border-gray-100">
                        {resumeData.experience.map((exp) => (
                            <div key={exp.id} className="p-6 border border-gray-200 rounded-lg space-y-4 relative group hover:border-primary-300 transition-colors bg-gray-50/50">
                                <button
                                    onClick={() => removeExperience(exp.id)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                    title="Remove Experience"
                                >
                                    <Trash2 size={18} />
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Company</label>
                                        <input
                                            type="text"
                                            value={exp.company}
                                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Position</label>
                                        <input
                                            type="text"
                                            value={exp.position}
                                            onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Start Date</label>
                                        <input
                                            type="text"
                                            value={exp.startDate}
                                            onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                            placeholder="MM/YYYY"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">End Date</label>
                                        <input
                                            type="text"
                                            value={exp.endDate}
                                            onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                            placeholder="Present or MM/YYYY"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-medium text-gray-700">Description</label>
                                            <button
                                                onClick={() => handleAiDescription(exp.id)}
                                                className="text-xs flex items-center gap-1 text-primary-600 font-semibold hover:text-primary-700 transition-colors cursor-pointer"
                                            >
                                                <Sparkles size={14} /> Magic Write
                                            </button>
                                        </div>
                                        <textarea
                                            value={exp.description}
                                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none h-24"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={addExperience}
                            className="w-full py-3 border-2 border-dashed border-primary-300 rounded-lg text-primary-600 font-medium hover:bg-primary-50 flex items-center justify-center space-x-2 transition-colors cursor-pointer hover:shadow-sm"
                        >
                            <Plus size={20} />
                            <span>Add Experience</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                    onClick={() => toggleSection('education')}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                    <span className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors">Education</span>
                    {activeSection === 'education' ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                </button>

                {activeSection === 'education' && (
                    <div className="p-6 space-y-6 animate-fade-in border-t border-gray-100">
                        {resumeData.education.map((edu) => (
                            <div key={edu.id} className="p-6 border border-gray-200 rounded-lg space-y-4 relative group hover:border-primary-300 transition-colors bg-gray-50/50">
                                <button
                                    onClick={() => removeEducation(edu.id)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                    title="Remove Education"
                                >
                                    <Trash2 size={18} />
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">School/University</label>
                                        <input
                                            type="text"
                                            value={edu.school}
                                            onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Degree</label>
                                        <input
                                            type="text"
                                            value={edu.degree}
                                            onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Start Date</label>
                                        <input
                                            type="text"
                                            value={edu.startDate}
                                            onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">End Date</label>
                                        <input
                                            type="text"
                                            value={edu.endDate}
                                            onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={addEducation}
                            className="w-full py-3 border-2 border-dashed border-primary-300 rounded-lg text-primary-600 font-medium hover:bg-primary-50 flex items-center justify-center space-x-2 transition-colors cursor-pointer hover:shadow-sm"
                        >
                            <Plus size={20} />
                            <span>Add Education</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                    onClick={() => toggleSection('skills')}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                    <span className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors">Skills</span>
                    {activeSection === 'skills' ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                </button>

                {activeSection === 'skills' && (
                    <div className="p-6 space-y-6 animate-fade-in border-t border-gray-100">
                        <div className="space-y-3">
                            {resumeData.skills.map((skill) => (
                                <div key={skill.id} className="flex items-center gap-3 group">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            value={skill.name}
                                            onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-shadow"
                                            placeholder="Skill name (e.g. React, Leadership)"
                                        />
                                    </div>
                                    <button
                                        onClick={() => removeSkill(skill.id)}
                                        className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-all cursor-pointer flex-shrink-0"
                                        title="Remove Skill"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={addSkill}
                            className="w-full py-3 border-2 border-dashed border-primary-300 rounded-lg text-primary-600 font-medium hover:bg-primary-50 flex items-center justify-center space-x-2 transition-colors cursor-pointer hover:shadow-sm"
                        >
                            <Plus size={20} />
                            <span>Add Skill</span>
                        </button>
                    </div>
                )}
            </div>
            {/* Custom Sections */}
            {resumeData.customSections.map((section) => (
                <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <button
                        onClick={() => toggleSection(`custom-${section.id}`)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                                {section.title}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeCustomSection(section.id);
                                }}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                title="Delete Section"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                        {activeSection === `custom-${section.id}` ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                    </button>

                    {activeSection === `custom-${section.id}` && (
                        <div className="p-6 space-y-6 animate-fade-in border-t border-gray-100">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Section Title</label>
                                <input
                                    type="text"
                                    value={section.title}
                                    onChange={(e) => updateCustomSectionTitle(section.id, e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none font-bold"
                                    placeholder="e.g. Certificates, Achievements"
                                />
                            </div>

                            {section.items.map((item) => (
                                <div key={item.id} className="p-6 border border-gray-200 rounded-lg space-y-4 relative group hover:border-primary-300 transition-colors bg-gray-50/50">
                                    <button
                                        onClick={() => removeCustomItem(section.id, item.id)}
                                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                        title="Remove Item"
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Title / Name</label>
                                            <input
                                                type="text"
                                                value={item.title}
                                                onChange={(e) => updateCustomItem(section.id, item.id, 'title', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                                placeholder="e.g. React Certification"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Date</label>
                                            <input
                                                type="text"
                                                value={item.date}
                                                onChange={(e) => updateCustomItem(section.id, item.id, 'date', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                                                placeholder="e.g. 2023"
                                            />
                                        </div>
                                        <div className="col-span-1 md:col-span-2 space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Description</label>
                                            <textarea
                                                value={item.description}
                                                onChange={(e) => updateCustomItem(section.id, item.id, 'description', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none h-20"
                                                placeholder="Optional details..."
                                            />
                                        </div>

                                        {/* Item Image Upload */}
                                        <div className="col-span-1 md:col-span-2">
                                            <label className="text-sm font-medium text-gray-700 block mb-2">Image (Optional)</label>
                                            <div className="flex items-center gap-4">
                                                {item.image ? (
                                                    <div className="relative group/img w-20 h-20 rounded-lg overflow-hidden border border-gray-300">
                                                        <img src={item.image} alt="Preview" className="w-full h-full object-cover" />
                                                        <button
                                                            onClick={() => updateCustomItem(section.id, item.id, 'image', null)}
                                                            className="absolute inset-0 bg-black/50 flex items-center justify-center text-white opacity-0 group-hover/img:opacity-100 transition-opacity"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <label className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-primary-400 transition-colors text-gray-400">
                                                        <Upload size={20} />
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            accept="image/*"
                                                            onChange={(e) => {
                                                                const file = e.target.files[0];
                                                                if (file) {
                                                                    const reader = new FileReader();
                                                                    reader.onloadend = () => updateCustomItem(section.id, item.id, 'image', reader.result);
                                                                    reader.readAsDataURL(file);
                                                                }
                                                            }}
                                                        />
                                                    </label>
                                                )}
                                                <span className="text-xs text-gray-500">Add certificate or achievement image</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={() => addCustomItem(section.id)}
                                className="w-full py-3 border-2 border-dashed border-primary-300 rounded-lg text-primary-600 font-medium hover:bg-primary-50 flex items-center justify-center space-x-2 transition-colors cursor-pointer hover:shadow-sm"
                            >
                                <Plus size={20} />
                                <span>Add Item</span>
                            </button>
                        </div>
                    )}
                </div>
            ))}

            <button
                onClick={addCustomSection}
                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
                <Plus size={24} />
                <span>Add Custom Section</span>
            </button>
        </div>
    );
};

export default ResumeForm;
