import * as z from "zod";
import {
	Completediscord_guilds,
	Completediscord_messages,
	Completereminders,
	Completetimezones,
	relateddiscord_guildsSchema,
	relateddiscord_messagesSchema,
	relatedremindersSchema,
	relatedtimezonesSchema,
} from "./index";

export const discord_userSchema = z.object({
	id: z.string(),
	created_at: z.date(),
	username: z.string().nullish(),
	timezone_id: z.bigint().nullish(),
});

export interface Completediscord_user extends z.infer<typeof discord_userSchema> {
	discord_guilds: Completediscord_guilds[];
	discord_messages: Completediscord_messages[];
	timezones?: Completetimezones | null;
	reminders: Completereminders[];
}

/**
 * relateddiscord_userSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relateddiscord_userSchema: z.ZodSchema<Completediscord_user> = z.lazy(() =>
	discord_userSchema.extend({
		discord_guilds: relateddiscord_guildsSchema.array(),
		discord_messages: relateddiscord_messagesSchema.array(),
		timezones: relatedtimezonesSchema.nullish(),
		reminders: relatedremindersSchema.array(),
	})
);
