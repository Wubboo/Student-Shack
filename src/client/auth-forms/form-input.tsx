import type { ComponentPropsWithoutRef } from "react";
import "./main.css";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
    label: string;
    htmlFor?: string | undefined;
    errors?: string[] | undefined;
};

export const Input = ({ label, htmlFor, errors, ...input }: InputProps) => (
    <>
        <label htmlFor={htmlFor}>
            {label}
            <input {...input} />
        </label>

        {errors?.map((e) => (
            <p key={e} role="alert">
                {e}
            </p>
        ))}
    </>
);
