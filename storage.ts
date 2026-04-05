import { openDB, type DBSchema } from 'idb';

interface HealthBridgeDB extends DBSchema {
  health_records: {
    key: number;
    value: {
      id?: number;
      symptoms: string;
      diagnosis: any;
      severity: string;
      timestamp: Date;
      synced: boolean;
    };
    indexes: { 'by-synced': boolean };
  };
}

const DB_NAME = 'healthbridge-db';
const DB_VERSION = 1;

export async function initDB() {
  return openDB<HealthBridgeDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      const store = db.createObjectStore('health_records', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('by-synced', 'synced');
    },
  });
}

export async function saveHealthRecord(record: { symptoms: string; diagnosis: any; severity: string }) {
  const db = await initDB();
  const timestamp = new Date();
  await db.add('health_records', {
    ...record,
    timestamp,
    synced: false,
  });
}

export async function getUnsyncedRecords() {
  const db = await initDB();
  return db.getAllFromIndex('health_records', 'by-synced', false);
}

export async function markAsSynced(ids: number[]) {
  const db = await initDB();
  const tx = db.transaction('health_records', 'readwrite');
  await Promise.all(
    ids.map(async (id) => {
      const record = await tx.store.get(id);
      if (record) {
        record.synced = true;
        await tx.store.put(record);
      }
    })
  );
  await tx.done;
}

export async function getAllRecords() {
    const db = await initDB();
    return db.getAll('health_records');
}
