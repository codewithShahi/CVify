import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const templates = [
    {
        id: 'modern',
        name: 'Modern Clean',
        image: 'templates/modern.png',
        popular: true,
    },
    {
        id: 'professional',
        name: 'Professional',
        image: 'templates/professional.png',
        popular: false,
    },
    {
        id: 'creative',
        name: 'Creative Portfolio',
        image: 'templates/creative.png',
        popular: false,
    },
    {
        id: 'simple',
        name: 'Simple Minimalist',
        image: 'templates/simple.png',
        popular: true,
    }
];

const Templates = () => {
    const navigate = useNavigate();

    const handleUseTemplate = (templateId) => {
        navigate(`/builder?template=${templateId}`);
    };

    return (
        <section id="templates" className="py-20 bg-gray-50">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="heading-2 mb-6">
                        Professionally Designed <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Templates</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Choose from our collection of ATS-friendly templates designed to get you hired faster.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {templates.map((template) => (
                        <div key={template.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            {template.popular && (
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                    Popular
                                </div>
                            )}

                            <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10 flex items-center justify-center">
                                    <button
                                        onClick={() => handleUseTemplate(template.id)}
                                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 btn-primary flex items-center gap-2"
                                    >
                                        Use Template <ArrowRight size={16} />
                                    </button>
                                </div>
                                <img
                                    src={template.image}
                                    alt={template.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-600 gap-2">
                                        <Check size={16} className="text-green-500" /> ATS Friendly
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 gap-2">
                                        <Check size={16} className="text-green-500" /> Fully Customizable
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Templates;
