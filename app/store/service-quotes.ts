import { create } from "zustand";
import { ServiceQuote } from "../types/service-quote";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type State = {
  serviceQuotes: ServiceQuote[];
  addServiceQuote: (serviceQuote: ServiceQuote) => void;
  removeServiceQuote: (index: number) => void;
  getServiceQuote: (index: number) => ServiceQuote;
};

const INITIAL_STATE = [] as ServiceQuote[];

export const useServiceQuotesStore = create<State>()(
  persist(
    (set, get) => ({
      serviceQuotes: INITIAL_STATE,
      addServiceQuote: (serviceQuote: ServiceQuote) =>
        set((state) => ({
          serviceQuotes: [...state.serviceQuotes, serviceQuote],
        })),
      removeServiceQuote: (index: number) =>
        set((state) => ({
          serviceQuotes: state.serviceQuotes.filter((_, i) => i !== index),
        })),
      getServiceQuote: (index: number) => {
        const serviceQuotes = get().serviceQuotes;
        return serviceQuotes[index];
      },
    }),
    {
      name: "service-quotes",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
