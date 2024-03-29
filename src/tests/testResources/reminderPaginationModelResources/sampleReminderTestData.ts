import { _01_01_2050_unix, _02_01_2050_unix } from "./constants";

import { Prisma, reminders } from "@prisma/client"
import Decimal from "decimal.js"


export const sampleReminderTestData: reminders[] = [
	{
		id: 94,
		created_at: new Date("2050-01-01T10:00:00Z"),
		user_id: "11111",
		channel_id: "44444",
		reminder_message: "hello world",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook1",
	},
	{
		id: 96,
		created_at: new Date("2050-02-01T12:00:00Z"),
		user_id: "11111",
		channel_id: "55555",
		reminder_message: "go to store",
		time: new Date(new Decimal(_02_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook2",
	},
	{
		id: 1,
		created_at: new Date("2050-01-01T10:00:00Z"),
		user_id: "11111",
		channel_id: "44444",
		reminder_message: "hwed",
		time: new Date(new Decimal(12345).toNumber() * 1000),
		webhook_id: "webhook1",
	},
	{
		id: 2,
		created_at: new Date("2050-01-02T12:00:00Z"),
		user_id: "11111",
		channel_id: "55555",
		reminder_message: "sde",
		time: new Date(new Decimal(67890).toNumber() * 1000),
		webhook_id: "webhook2",
	},
	{
		id: 3,
		created_at: new Date("2050-01-03T14:00:00Z"),
		user_id: "22222",
		channel_id: "66666",
		reminder_message: "meeting at 2 PM",
		time: new Date(new Decimal(98765).toNumber() * 1000),
		webhook_id: "webhook3",
	},
	{
		id: 4,
		created_at: new Date("2050-01-04T16:00:00Z"),
		user_id: "22222",
		channel_id: "77777",
		reminder_message: "submit report",
		time: new Date(new Decimal(54321).toNumber() * 1000),
		webhook_id: "webhook4",
	},
	{
		id: 5,
		created_at: new Date("2050-01-05T18:00:00Z"),
		user_id: "22222",
		channel_id: "88888",
		reminder_message: "call mom",
		time: new Date(new Decimal(13579).toNumber() * 1000),
		webhook_id: "webhook5",
	},
	{
		id: 6,
		created_at: new Date("2050-01-06T20:00:00Z"),
		user_id: "66666",
		channel_id: "99999",
		reminder_message: "buy groceries",
		time: new Date(new Decimal(24680).toNumber() * 1000),
		webhook_id: "webhook6",
	},
	{
		id: 7,
		created_at: new Date("2050-01-07T22:00:00Z"),
		user_id: "77777",
		channel_id: "15432",
		reminder_message: "send email",
		time: new Date(new Decimal(86420).toNumber() * 1000),
		webhook_id: "webhook7",
	},
	{
		id: 8,
		created_at: new Date("2050-01-08T00:00:00Z"),
		user_id: "88888",
		channel_id: "11111",
		reminder_message: "exercise",
		time: new Date(new Decimal(11111).toNumber() * 1000),
		webhook_id: "webhook8",
	},
	{
		id: 9,
		created_at: new Date("2050-01-09T02:00:00Z"),
		user_id: "99999",
		channel_id: "22222",
		reminder_message: "read a book",
		time: new Date(new Decimal(22222).toNumber() * 1000),
		webhook_id: "webhook9",
	},
	{
		id: 10,
		created_at: new Date("2050-01-10T04:00:00Z"),
		user_id: "00000",
		channel_id: "33333",
		reminder_message: "attend webinar",
		time: new Date(new Decimal(33333).toNumber() * 1000),
		webhook_id: "webhook10",
	},
	{
		id: 94,
		created_at: new Date("2050-01-01T10:00:00Z"),
		user_id: "11111",
		channel_id: "44444",
		reminder_message: "hello world",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook1",
	},
	{
		id: 95,
		created_at: new Date("2050-01-02T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141063348729930000",
		reminder_message: "test reminder 1",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook2",
	},
	{
		id: 96,
		created_at: new Date("2050-01-03T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141069949981430000",
		reminder_message: "test reminder 2",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook3",
	},
	{
		id: 97,
		created_at: new Date("2050-01-04T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141072086945760000",
		reminder_message: "test reminder 3",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook4",
	},
	{
		id: 98,
		created_at: new Date("2050-01-05T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141073414271010000",
		reminder_message: "test reminder 4",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook5",
	},
	{
		id: 99,
		created_at: new Date("2050-01-06T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141074519721770000",
		reminder_message: "test reminder 5",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook6",
	},
	{
		id: 100,
		created_at: new Date("2050-01-07T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141074539472740000",
		reminder_message: "test reminder 6",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook7",
	},
	{
		id: 101,
		created_at: new Date("2050-01-08T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141074549954330000",
		reminder_message: "test reminder 7",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook8",
	},
	{
		id: 102,
		created_at: new Date("2050-01-09T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141074560758850000",
		reminder_message: "test reminder 8",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook9",
	},
	{
		id: 103,
		created_at: new Date("2050-01-10T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141074625678270000",
		reminder_message: "test reminder 9",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook10",
	},
	{
		id: 104,
		created_at: new Date("2050-01-11T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141075159768360000",
		reminder_message: "test reminder 10",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook11",
	},
	{
		id: 105,
		created_at: new Date("2050-01-12T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141075563541430000",
		reminder_message: "test reminder 11",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook12",
	},
	{
		id: 106,
		created_at: new Date("2050-01-13T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141076227399100000",
		reminder_message: "test reminder 12",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook13",
	},
	{
		id: 107,
		created_at: new Date("2050-01-14T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141078592680370000",
		reminder_message: "test reminder 13",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook14",
	},
	{
		id: 108,
		created_at: new Date("2050-01-15T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141080138918920000",
		reminder_message: "test reminder 14",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook15",
	},
	{
		id: 109,
		created_at: new Date("2050-01-16T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141080236268730000",
		reminder_message: "test reminder 15",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook16",
	},
	{
		id: 110,
		created_at: new Date("2050-01-17T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141110604766130000",
		reminder_message: "test reminder 16",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook17",
	},
	{
		id: 111,
		created_at: new Date("2050-01-18T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141613606279060000",
		reminder_message: "test reminder 17",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook18",
	},
	{
		id: 112,
		created_at: new Date("2050-01-19T10:00:00Z"),
		user_id: "11111",
		channel_id: "1153526434254560000",
		reminder_message: "test reminder 18",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook19",
	},
	{
		id: 113,
		created_at: new Date("2050-01-20T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141062843467320000",
		reminder_message: "test reminder 19",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook20",
	},
	{
		id: 114,
		created_at: new Date("2050-01-21T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141063045792150000",
		reminder_message: "test reminder 20",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook21",
	},
	{
		id: 115,
		created_at: new Date("2050-01-22T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141063185143690000",
		reminder_message: "test reminder 21",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook22",
	},
	{
		id: 116,
		created_at: new Date("2050-01-23T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141073083793400000",
		reminder_message: "test reminder 22",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook23",
	},
	{
		id: 117,
		created_at: new Date("2050-01-24T10:00:00Z"),
		user_id: "11111",
		channel_id: "1141063217716660000",
		reminder_message: "test reminder 23",
		time: new Date(new Decimal(_01_01_2050_unix).toNumber() * 1000),
		webhook_id: "webhook24",
	},
]


export const user11111 = {
	id: "11111",
	username: "testUser_11111",
}

export const userData: Prisma.discord_userCreateManyInput[] = [
	user11111,
	{
		id: "22222",
		username: "testUser_22222",
	},
	{
		id: "66666",
		username: "testUser_66666",
	},
	{
		id: "77777",
		username: "testUser_77777",
	},
	{
		id: "88888",
		username: "testUser_88888",
	},
	{
		id: "99999",
		username: "testUser_99999",
	},
	{
		id: "00000",
		username: "testUser_00000",
	},
]
