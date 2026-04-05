import { z } from 'zod';
import { insertHealthRecordSchema, healthRecords } from './schema';

export const api = {
  healthRecords: {
    create: {
      method: 'POST' as const,
      path: '/api/health-records',
      input: insertHealthRecordSchema.omit({ id: true, timestamp: true, synced: true }),
      responses: {
        201: z.custom<typeof healthRecords.$inferSelect>(),
      },
    },
    sync: {
        method: 'POST' as const,
        path: '/api/sync',
        input: z.array(insertHealthRecordSchema.omit({ id: true, timestamp: true, synced: true })),
        responses: {
            200: z.object({ synced: z.number() })
        }
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
