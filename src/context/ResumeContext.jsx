import { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeData] = useState({
        personalInfo: {
            fullName: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1 234 567 8900',
            address: 'New York, USA',
            jobTitle: 'Software Engineer',
            website: 'www.johndoe.com',
            linkedin: 'linkedin.com/in/johndoe',
            summary: 'Experienced software engineer with a passion for building scalable web applications. Skilled in React, Node.js, and cloud technologies.',
            profileImage: null,
        },
        experience: [
            {
                id: 1,
                company: 'Tech Solutions Inc.',
                position: 'Senior Developer',
                startDate: '2021-06',
                endDate: 'Present',
                description: 'Leading a team of 5 developers to build modern web applications. Improved system performance by 30%.',
                location: 'San Francisco, CA'
            },
            {
                id: 2,
                company: 'WebWorks Agency',
                position: 'Frontend Developer',
                startDate: '2019-03',
                endDate: '2021-05',
                description: 'Developed responsive websites for various clients using React and Tailwind CSS.',
                location: 'Remote'
            }
        ],
        education: [
            {
                id: 1,
                school: 'University of Technology',
                degree: 'Bachelor of Science in Computer Science',
                startDate: '2015-09',
                endDate: '2019-05',
                location: 'New York, NY'
            }
        ],
        skills: [
            { id: 1, name: 'JavaScript', level: 'Expert' },
            { id: 2, name: 'React', level: 'Expert' },
            { id: 3, name: 'Node.js', level: 'Intermediate' },
            { id: 4, name: 'Tailwind CSS', level: 'Expert' },
            { id: 5, name: 'TypeScript', level: 'Intermediate' }
        ],
        projects: [
            {
                id: 1,
                name: 'E-commerce Platform',
                description: 'Built a full-featured e-commerce platform using MERN stack.',
                link: 'github.com/johndoe/shop'
            }
        ],
        customSections: []
    });

    const [selectedTemplate, setSelectedTemplate] = useState('modern');
    const [themeColor, setThemeColor] = useState('#0ea5e9'); // primary-500

    const updatePersonalInfo = (field, value) => {
        setResumeData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [field]: value }
        }));
    };

    const updateProfileImage = (imageUrl) => {
        setResumeData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, profileImage: imageUrl }
        }));
    };

    const addCustomSection = () => {
        setResumeData(prev => ({
            ...prev,
            customSections: [
                ...prev.customSections,
                {
                    id: Date.now(),
                    title: 'New Section',
                    items: []
                }
            ]
        }));
    };

    const removeCustomSection = (sectionId) => {
        setResumeData(prev => ({
            ...prev,
            customSections: prev.customSections.filter(sec => sec.id !== sectionId)
        }));
    };

    const updateCustomSectionTitle = (sectionId, newTitle) => {
        setResumeData(prev => ({
            ...prev,
            customSections: prev.customSections.map(sec =>
                sec.id === sectionId ? { ...sec, title: newTitle } : sec
            )
        }));
    };

    const addCustomItem = (sectionId) => {
        setResumeData(prev => ({
            ...prev,
            customSections: prev.customSections.map(sec =>
                sec.id === sectionId ? {
                    ...sec,
                    items: [...sec.items, { id: Date.now(), title: '', date: '', description: '', image: null }]
                } : sec
            )
        }));
    };

    const removeCustomItem = (sectionId, itemId) => {
        setResumeData(prev => ({
            ...prev,
            customSections: prev.customSections.map(sec =>
                sec.id === sectionId ? {
                    ...sec,
                    items: sec.items.filter(item => item.id !== itemId)
                } : sec
            )
        }));
    };

    const updateCustomItem = (sectionId, itemId, field, value) => {
        setResumeData(prev => ({
            ...prev,
            customSections: prev.customSections.map(sec =>
                sec.id === sectionId ? {
                    ...sec,
                    items: sec.items.map(item =>
                        item.id === itemId ? { ...item, [field]: value } : item
                    )
                } : sec
            )
        }));
    };

    const addExperience = () => {
        setResumeData(prev => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    id: Date.now(),
                    company: '',
                    position: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                    location: ''
                }
            ]
        }));
    };

    const updateExperience = (id, field, value) => {
        setResumeData(prev => ({
            ...prev,
            experience: prev.experience.map(exp =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        }));
    };

    const removeExperience = (id) => {
        setResumeData(prev => ({
            ...prev,
            experience: prev.experience.filter(exp => exp.id !== id)
        }));
    };

    const addEducation = () => {
        setResumeData(prev => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    id: Date.now(),
                    school: '',
                    degree: '',
                    startDate: '',
                    endDate: '',
                    location: ''
                }
            ]
        }));
    };

    const updateEducation = (id, field, value) => {
        setResumeData(prev => ({
            ...prev,
            education: prev.education.map(edu =>
                edu.id === id ? { ...edu, [field]: value } : edu
            )
        }));
    };

    const removeEducation = (id) => {
        setResumeData(prev => ({
            ...prev,
            education: prev.education.filter(edu => edu.id !== id)
        }));
    };

    const addSkill = () => {
        setResumeData(prev => ({
            ...prev,
            skills: [...prev.skills, { id: Date.now(), name: '', level: 'Beginner' }]
        }));
    };

    const updateSkill = (id, field, value) => {
        setResumeData(prev => ({
            ...prev,
            skills: prev.skills.map(skill =>
                skill.id === id ? { ...skill, [field]: value } : skill
            )
        }));
    };

    const removeSkill = (id) => {
        setResumeData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill.id !== id)
        }));
    };

    return (
        <ResumeContext.Provider value={{
            resumeData,
            setResumeData,
            selectedTemplate,
            setSelectedTemplate,
            themeColor,
            setThemeColor,
            updatePersonalInfo,
            updateProfileImage,
            addExperience,
            updateExperience,
            removeExperience,
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
        }}>
            {children}
        </ResumeContext.Provider>
    );
};
