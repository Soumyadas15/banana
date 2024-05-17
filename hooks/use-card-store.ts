import create from 'zustand';

interface CardState {
    clickedCards: string[];
    addClickedCard: (card: string) => void;
    clearClickedCards: () => void;
}

export const useCardStore = create<CardState>((set) => ({
    clickedCards: [],
    addClickedCard: (card) => set((state) => ({ clickedCards: [...state.clickedCards, card] })),
    clearClickedCards: () => set({ clickedCards: [] }),
}));


