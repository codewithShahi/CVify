import { useRef, useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import { Download, LayoutTemplate } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import ModernTemplate from '../Templates/ModernTemplate';
import ProfessionalTemplate from '../Templates/ProfessionalTemplate';
import CreativeTemplate from '../Templates/CreativeTemplate';
import SimpleTemplate from '../Templates/SimpleTemplate';
import ElegantTemplate from '../Templates/ElegantTemplate';
import CompactTemplate from '../Templates/CompactTemplate';

const ResumePreview = () => {
    const [showTemplateSelector, setShowTemplateSelector] = useState(false);
    const [scale, setScale] = useState(0.85);
    const componentRef = useRef();
    const { resumeData, themeColor, setThemeColor, selectedTemplate, setSelectedTemplate } = useResume();

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                const newScale = (width - 40) / 800;
                setScale(newScale);
            } else if (width < 1024) {
                setScale(0.7);
            } else {
                setScale(0.85);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const colors = [
        '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899',
        '#f43f5e', '#ef4444', '#f97316', '#10b981', '#0f172a',
    ];

    const templates = [
        { id: 'modern', name: 'Modern Clean', color: '#3b82f6' },
        { id: 'professional', name: 'Professional Sidebar', color: '#10b981' },
        { id: 'creative', name: 'Creative Bold', color: '#8b5cf6' },
        { id: 'simple', name: 'Simple Minimalist', color: '#0f172a' },
        { id: 'elegant', name: 'Elegant Serif', color: '#ec4899' },
        { id: 'compact', name: 'Compact Dense', color: '#f97316' }
    ];

    const renderTemplate = () => {
        const props = { ref: componentRef, data: resumeData, color: themeColor };
        switch (selectedTemplate) {
            case 'modern': return <ModernTemplate {...props} />;
            case 'professional': return <ProfessionalTemplate {...props} />;
            case 'creative': return <CreativeTemplate {...props} />;
            case 'simple': return <SimpleTemplate {...props} />;
            case 'elegant': return <ElegantTemplate {...props} />;
            case 'compact': return <CompactTemplate {...props} />;
            default: return <ModernTemplate {...props} />;
        }
    };

    return (
        <div className="h-full flex flex-col relative">
            <div className="bg-white p-4 shadow-md border-b border-gray-200 flex flex-wrap gap-4 items-center justify-between sticky top-0 z-[50]">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        {/* Cursor Pointer added to Template Button */}
                        <button
                            onClick={() => setShowTemplateSelector(!showTemplateSelector)}
                            className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all cursor-pointer"
                        >
                            <LayoutTemplate size={20} className="text-gray-600" />
                            <span className="text-sm font-semibold text-gray-700">Change Template</span>
                        </button>

                        {showTemplateSelector && (
                            <div className="absolute top-full left-0 mt-2 w-[280px] sm:w-[320px] bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-[60] grid grid-cols-2 gap-3 animate-fade-in-up">
                                {templates.map(t => (
                                    /* Cursor Pointer added to Template Cards */
                                    <div
                                        key={t.id}
                                        onClick={() => {
                                            setSelectedTemplate(t.id);
                                            setShowTemplateSelector(false);
                                        }}
                                        className={`cursor-pointer rounded-lg border-2 overflow-hidden hover:shadow-md transition-all ${selectedTemplate === t.id ? 'border-primary-500 ring-2 ring-primary-100' : 'border-gray-100 hover:border-gray-300'}`}
                                    >
                                        <div className="h-20 bg-gray-50 flex items-center justify-center pointer-events-none" style={{ backgroundColor: `${t.color}10` }}>
                                            <div className="flex flex-col gap-1 w-12 opacity-40">
                                                <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: t.color }}></div>
                                                <div className="h-1 w-2/3 bg-gray-300 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-1.5 text-center pointer-events-none">
                                            <span className="text-[10px] font-bold text-gray-700">{t.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

                    <div className="flex gap-1.5 overflow-x-auto pb-1 max-w-[120px] sm:max-w-none scrollbar-hide">
                        {colors.map((color) => (
                            /* Cursor Pointer added to Color Circles */
                            <button
                                key={color}
                                onClick={() => setThemeColor(color)}
                                className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-125 shrink-0 cursor-pointer ${themeColor === color ? 'border-gray-900 scale-110' : 'border-transparent'}`}
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>
                </div>

                <DownloadButton data={resumeData} componentRef={componentRef} />
            </div>

            <div
                className="flex-1 bg-gray-100/50 overflow-y-auto overflow-x-hidden flex justify-center p-4 sm:p-8 relative z-0"
                onClick={() => setShowTemplateSelector(false)}
            >
                <div
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: 'top center',
                        width: '794px',
                        height: 'fit-content'
                    }}
                    className="bg-white shadow-2xl transition-transform duration-300 mb-20"
                >
                    {renderTemplate()}
                </div>
            </div>
        </div>
    );
};

export default ResumePreview;