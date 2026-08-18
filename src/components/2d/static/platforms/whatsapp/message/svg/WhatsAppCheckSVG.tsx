type WhatsAppCheckSVGProps = {
    isDoubleChecked: boolean
    isBlueTick: boolean;
};

export default function WhatsAppCheckSVG({
    isDoubleChecked = true,
    isBlueTick = false
}: WhatsAppCheckSVGProps) {
    const color = (isBlueTick && isDoubleChecked) ? "#53BDEB": "#AEBAC1"

    return (
        <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            aria-hidden="true"
        >
            {isDoubleChecked && (
                <path
                    d="M1 6.5 L4.5 10 L11 2"
                    stroke={color}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}
            
            <path
                d="M7 6.5 L10.5 10 L17 2"
                stroke={color}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
};

