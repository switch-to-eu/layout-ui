import * as React from "react";
import type {
  UseFormRegister,
  FieldError,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import type { z } from "zod";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { cn } from "../../lib/utils";
import { isFieldRequired } from "./FormUtils";

export interface FormInputProps<TFormData extends FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> {
  label: string;
  name: FieldPath<TFormData>;
  register: UseFormRegister<TFormData>;
  error?: FieldError;
  description?: string;
  valueAsNumber?: boolean;
  // Optional schema to auto-determine required status
  schema?: z.ZodObject<z.ZodRawShape>;
}

export const FormInput = <TFormData extends FieldValues>({
  label,
  name,
  register,
  error,
  description,
  className,
  id,
  valueAsNumber,
  schema,
  ...props
}: FormInputProps<TFormData>) => {
  const inputId = id ?? name ?? label.toLowerCase().replace(/\s+/g, "-");

  // Determine if field is required from schema if provided
  const isRequired = schema ? isFieldRequired(schema, String(name)) : false;

  return (
    <div className="space-y-2">
      <Label htmlFor={inputId} className="text-sm font-medium">
        {label}
        {isRequired && <span className="text-destructive ml-1">*</span>}
        {!isRequired && (
          <span className="text-muted-foreground ml-1">(Optional)</span>
        )}
      </Label>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      <Input
        id={inputId}
        className={cn(
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        {...register(name, { valueAsNumber })}
        {...props}
      />

      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
};

FormInput.displayName = "FormInput";