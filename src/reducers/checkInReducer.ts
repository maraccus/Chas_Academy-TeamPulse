import type { CheckIn } from '../types';

export type CheckInAction =
  | { type: 'ADD_CHECKIN'; payload: Omit<CheckIn, 'id' | 'timestamp'> }
  | { type: 'REMOVE_CHECKIN'; payload: { id: string } }
  | { type: 'CLEAR_DAY'; payload: { date: string } };

export function checkInReducer(state: CheckIn[], action: CheckInAction): CheckIn[] {
  switch (action.type) {
    case 'ADD_CHECKIN': {
      const newCheckIn: CheckIn = {
        ...action.payload,
        id: crypto.randomUUID(),
        timestamp: new Date(),
      };
      return [...state, newCheckIn];
    }
    case 'REMOVE_CHECKIN': {
      return state.filter((checkIn) => checkIn.id !== action.payload.id);
    }
    case 'CLEAR_DAY': {
      const dateOnly = action.payload.date;
      return state.filter((checkIn) => {
        const checkInDate = checkIn.timestamp.toISOString().slice(0, 10);
        return checkInDate !== dateOnly;
      });
    }
    default:
      return state;
  }
}