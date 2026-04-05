import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { saveHealthRecord, getUnsyncedRecords, markAsSynced, getAllRecords } from "@/lib/storage";

export function useHealthRecords() {
  return useQuery({
    queryKey: ['local-health-records'],
    queryFn: async () => {
      return getAllRecords();
    }
  });
}

export function useCreateHealthRecord() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: { symptoms: string; diagnosis: any; severity: string }) => {
      // 1. Save to IndexedDB (Offline first)
      await saveHealthRecord(data);
      
      // 2. Try to sync if online
      if (navigator.onLine) {
        try {
          const unsynced = await getUnsyncedRecords();
          if (unsynced.length > 0) {
            const res = await fetch(api.healthRecords.sync.path, {
              method: api.healthRecords.sync.method,
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(unsynced.map(r => ({
                symptoms: r.symptoms,
                diagnosis: r.diagnosis,
                severity: r.severity || "low" // fallback
              }))),
            });
            
            if (res.ok) {
              const ids = unsynced.map(r => r.id as number);
              await markAsSynced(ids);
            }
          }
        } catch (error) {
          console.error("Sync failed, stored locally", error);
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-health-records'] });
    }
  });
}
