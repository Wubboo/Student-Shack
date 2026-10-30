import type { ComponentPropsWithoutRef } from "react";
import styles from "./form.module.css";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
    label: string;
    htmlFor?: string | undefined;
    errors?: string[] | undefined;
};

export const Input = ({ label, htmlFor, errors, ...input }: InputProps) => (
    <>
        <label className={styles.label} htmlFor={htmlFor}>
            {label}
            <input {...input} />
        </label>

        {errors?.map((e) => (
            <p className={styles.error} key={e} role="alert">
                {e}
            </p>
        ))}
    </>
);
