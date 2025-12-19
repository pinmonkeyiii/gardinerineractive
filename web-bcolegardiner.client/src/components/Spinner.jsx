export default function Spinner({ size = 16 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className="animate-spin shrink-0 align-middle"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                opacity="0.25"
            />
            <path
                fill="currentColor"
                opacity="0.75"
                d="M4 12a8 8 0 018-8v3.2A4.8 4.8 0 007.2 12H4z"
            />
        </svg>
    );
}
