import { useEffect, useRef } from "react";

interface OtpInputProps {
    value: string[];
    onChange: (nextValue: string[]) => void;
}

export function OtpInput({ value, onChange }: OtpInputProps) {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const updateDigit = (index: number, digit: string) => {
        const cleanDigit = digit.replace(/\D/g, "").slice(-1);
        const next = [...value];
        next[index] = cleanDigit;
        onChange(next);

        if (cleanDigit && index < value.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === "Backspace" && !value[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex items-center justify-center gap-2">
            {value.map((digit, index) => (
                <input
                    key={index}
                    ref={(node) => {
                        inputRefs.current[index] = node;
                    }}
                    value={digit}
                    onChange={(event) => updateDigit(index, event.target.value)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    inputMode="numeric"
                    maxLength={1}
                    className="h-12 w-10 rounded-xl border border-slate-300 bg-white text-center text-lg font-semibold text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 sm:h-14 sm:w-12"
                />
            ))}
        </div>
    );
}
