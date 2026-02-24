import { PrismaClient } from "@prisma/client";
import 'dotenv/config'

import { PrismaPg } from '@prisma/adapter-pg'
const adapter = new PrismaPg({
  connectionString: 'postgresql://neondb_owner:npg_HYmIVeZ8Nhd2@ep-lively-block-aiyv5t0d-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
})
export const client = new PrismaClient({adapter});