// src/components/PageContainer.jsx
export default function PageContainer({ children, className = "" }) {
    return (
        <div className={`mx-auto w-full max-w-10xl px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
}
