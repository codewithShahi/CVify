export const generateSummary = (jobTitle) => {
    const summaries = [
        `Experienced ${jobTitle} with a proven track record of delivering high-quality solutions. Passionate about innovation and efficiency.`,
        `Results-driven ${jobTitle} dedicated to optimizing processes and achieving organizational goals. Expert in problem-solving and collaboration.`,
        `Dedicated ${jobTitle} with detailed knowledge of industry best practices. Committed to continuous learning and professional growth.`,
        `Innovative ${jobTitle} bringing 5+ years of experience in dynamic environments. Strong leadership and communication skills.`
    ];
    return summaries[Math.floor(Math.random() * summaries.length)];
};

export const generateDescription = (jobTitle) => {
    const descriptions = [
        `Led a team of professionals to execute complex projects, ensuring timely delivery and budget adherence.`,
        `Developed and implemented strategic initiatives that improved operational efficiency by 25%.`,
        `Collaborated with cross-functional teams to drive product innovation and enhance user experience.`,
        `Conducted comprehensive analysis to identify market trends and optimize business performance.`
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
};
