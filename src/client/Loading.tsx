const DEFAULT_SIZE = 40;
const DEFAULT_COLOR = "currentColor";
const DEFAULT_STROKE_WIDTH = 4;
const DEFAULT_DURATION = 1;

export type LoadingProps = {
    size?: number;
    color?: string;
    strokeWidth?: number;
    duration?: number | string;
    turnRight?: boolean;
    ariaLabel?: string;
};

/**
 * @description Simple loading icon svg.
 * 
 * @param size size of the loading icon. Default 40px.
 * @param color color of the loading icon. Inherits from parent by default.
 * @param strokeWidth width of the loading circle itself. 4px by default.
 * @param duration time in seconds for the loading icon to rotate. 1s by default.
 * @param turnRight wether it turns right or left. Default is `true`.
 * @param ariaLabel The Aria label. Default is `"Loading"`.
*/
export function Loading({
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    strokeWidth = DEFAULT_STROKE_WIDTH,
    duration = DEFAULT_DURATION,
    turnRight = true,
    ariaLabel = "Loading",
}: LoadingProps) {
    const dir = turnRight ? "" : "-";
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            aria-label={ariaLabel}
            role="img"
        >
            <circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeDasharray="80"
                strokeLinecap="round"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 20 20"
                    to={dir + "360 20 20"}
                    dur={`${duration}s`}
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    );
}