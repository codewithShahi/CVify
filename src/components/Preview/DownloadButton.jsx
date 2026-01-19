import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { Download } from 'lucide-react';

const DownloadButton = ({ data, componentRef }) => {

    // Ye function click hone par browser ka print dialog kholega
    const handlePrint = useReactToPrint({
        contentRef: componentRef, // Naye version ke liye
        content: () => componentRef.current, // Purane version ke liye (Dono rakhe hain safe side)
        documentTitle: `${data?.personalInfo?.fullName || 'My-CV'}-Resume`,
    });

    return (
        <button
            type="button"
            onClick={() => {
                if (componentRef.current) {
                    handlePrint();
                } else {
                    alert("CV content nahi mil raha, please page refresh karein.");
                }
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer z-[50]"
        >
            <Download size={18} />
            <span>Download PDF</span>
        </button>
    );
};

export default DownloadButton;