import z from "zod"

export const reminderForm = z.object({
	type: z.literal("reminder"),
	reminderId: z.coerce.number(),
})

export const reminderModalIdPipeline = z
	.string()
	.transform((res, ctx) => {
		try {
			return JSON.parse(res)
		} catch (e) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Invalid JSON",
			})
			return z.NEVER
		}
	})
	.pipe(reminderForm)

export const formDataSchema = z.object({
	reminder_message: z.string(),
	time: z.string(),
})
