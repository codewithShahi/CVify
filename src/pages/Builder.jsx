import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ResumeForm from '../components/Editor/ResumeForm';
import ResumePreview from '../components/Preview/ResumePreview';
import { Menu, X, Eye, Edit3 } from 'lucide-react';
import { useResume } from '../context/ResumeContext';

const Builder = () => {
    const [showPreview, setShowPreview] = useState(false);
    const [searchParams] = useSearchParams();
    const { setSelectedTemplate } = useResume();

    useEffect(() => {
        const templateParam = searchParams.get('template');
        if (templateParam) {
            setSelectedTemplate(templateParam);
        }
    }, [searchParams, setSelectedTemplate]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Mobile Toggle & Header */}
            <div className="lg:hidden bg-white p-4 shadow-sm border-b flex justify-between items-center sticky top-0 z-40">
                <span className="font-bold text-xl bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">CVify Builder</span>
                <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium"
                >
                    {showPreview ? (
                        <>
                            <Edit3 size={16} /> Edit
                        </>
                    ) : (
                        <>
                            <Eye size={16} /> Preview
                        </>
                    )}
                </button>
            </div>

            <div className="flex-1 lg:h-[calc(100vh-64px)] overflow-hidden">
                <div className="h-full flex flex-col lg:flex-row">
                    {/* Editor Section */}
                    <div className={`${showPreview ? 'hidden lg:block' : 'block'} lg:w-5/12 xl:w-1/3 h-full overflow-y-auto border-r border-gray-200 bg-gray-50/50`}>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Edit3 className="text-primary-600" />
                                Editor
                            </h2>
                            <ResumeForm />
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className={`${!showPreview ? 'hidden lg:block' : 'block'} lg:w-7/12 xl:w-2/3 h-full bg-gray-100/50`}>
                        <ResumePreview />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;
