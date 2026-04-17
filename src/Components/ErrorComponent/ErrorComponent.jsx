import React from 'react';
import { FiAlertTriangle, FiRefreshCcw, FiHome, FiArrowLeft } from 'react-icons/fi';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router';

const ErrorComponent = ({ 
  title, 
  message, 
  onRetry, 
  className = ""
}) => {
  const error = useRouteError();
  const navigate = useNavigate();

  let displayTitle = title || "Oops! Something went wrong";
  let displayMessage = message || "An unexpected application error has occurred. We're working on getting it fixed.";
  let statusCode = "Error";

  
  if (!title && !message && error) {
    if (isRouteErrorResponse(error)) {
      statusCode = error.status;
      displayTitle = error.statusText || "Page Not Found";
      displayMessage = error.data?.message || error.data || "The page you are looking for doesn't exist or has been moved.";
    } else if (error instanceof Error) {
      statusCode = "500";
      displayTitle = "Application Error";
      displayMessage = error.message;
    }
  }

  const handleRetry = onRetry || (() => window.location.reload());
  const goHome = () => navigate('/');
  const goBack = () => navigate(-1);

  return (
    
    <div className={`min-h-[80vh] w-full flex items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-red-50/50 to-white ${className}`}>
      
      
      <div className="w-full max-w-lg bg-white rounded-[2rem] shadow-2xl shadow-red-900/5 border border-red-50 p-8 sm:p-12 text-center relative overflow-hidden">
        
        
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-100 rounded-full opacity-50 blur-3xl" aria-hidden="true"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-100 rounded-full opacity-50 blur-3xl" aria-hidden="true"></div>

        <div className="relative z-10">
          
          
          <div className="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-red-100">
            <FiAlertTriangle className="w-10 h-10 text-red-500" aria-hidden="true" />
          </div>

          
          {statusCode !== "Error" && (
            <p className="text-sm font-bold tracking-widest text-red-400 uppercase mb-3">
              Error {statusCode}
            </p>
          )}

         
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {displayTitle}
          </h1>
          
          <p className="text-base sm:text-lg text-gray-500 mb-10 leading-relaxed">
            {displayMessage}
          </p>

          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            
            <button
              onClick={goHome}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 shadow-lg shadow-red-200 hover:shadow-red-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-100 transition-all duration-200"
            >
              <FiHome className="w-4 h-4 mr-2" aria-hidden="true" />
              Back to Home
            </button>

            
            <button
              onClick={error ? goBack : handleRetry}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-100 rounded-xl hover:bg-gray-50 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-50 transition-all duration-200"
            >
              {error ? (
                <><FiArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Go Back</>
              ) : (
                <><FiRefreshCcw className="w-4 h-4 mr-2" aria-hidden="true" /> Try Again</>
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;