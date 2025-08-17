import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { error: "Email is required" })
    .email({ error: "Please provide a valid email address." }),

  password: z
    .string()
    .min(6, { error: "Password must be atleast 6 characters long" })
    .max(100, { error: "Password cannot exceed 100 characters" }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),

  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    }),
  email: z
    .string()
    .min(1, { error: "Email is required" })
    .email({ error: "Please provide a valid email address." }),

  password: z
    .string()
    .min(6, { error: "Password must be atleast 6 characters long" })
    .max(100, { error: "Password cannot exceed 100 characters" })
    .regex(/[A-Z]/, "Password must contain atleast one uppercase character")
    .regex(/[a-z]/, "Password must contain atleast one lowercase character")
    .regex(/[0-9]/, "Password must contain atleast one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain atleast one special character"
    ),
});

export const AskQuestionSchema = z.object({
  title: z
    .string()
    .min(5, { error: "Title is required" })
    .max(100, { error: "Title cannot exceed 100 characters" }),

  content: z.string().min(1, { error: "Body is required" }),
  tags: z
    .array(z.string())
    .min(1, {
      error: "Atleast one tag is required",
    })
    .max(30, {
      error: "Tags cannot exceed 30 characters",
    })
    .min(1, {
      error: "Atleast one tag is required",
    })
    .max(3, {
      error: "Cannot add more than 3 tags",
    }),
});
