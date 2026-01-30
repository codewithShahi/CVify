import React from 'react';

export default function SplashScreen() {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
            <div className="flex flex-col items-center">

                {/* Logo Image */}
                <img
                    src="/cvify-logo.png"
                    alt="CVify Logo"
                    className="w-28 object-contain"
                />
                {/* Animated CV/Paper Icon */}
                <div className="relative mb-8 mt-8">
                    <div className="w-42 h-56 border-4 border-blue-200 rounded-md relative overflow-hidden bg-white shadow-xl animate-[float_3s_ease-in-out_infinite]">
                        {/* CV Lines Animation */}
                        <div className="p-2 space-y-2">
                            <div className="h-2 w-8 bg-blue-300 rounded animate-[pulse_1.5s_infinite]"></div>
                            <div className="h-1 w-full bg-slate-100 rounded"></div>
                            <div className="h-1 w-full bg-slate-100 rounded"></div>
                            <div className="h-1 w-2/3 bg-slate-100 rounded"></div>
                            <div className="h-4 w-4 rounded-full bg-blue-100 absolute right-2 top-2"></div>
                        </div>
                        {/* Scanning Effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_10px_#2563eb] animate-[scan_2s_linear_infinite]"></div>
                    </div>
                </div>


                <p className="mt-6 text-slate-400 font-medium tracking-[0.3em] text-[10px]  animate-pulse">
                    Fill - Build - Chill
                    <br />
                    <br />
                    <b className="text-blue-500">No Signup - No Login</b>
                    <br />
                    <b className="text-blue-500">Data stays in browser</b>
                </p>
            </div>

            <style>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
        </div>
    );
}