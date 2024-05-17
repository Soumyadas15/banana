import { create } from "zustand";

export type ModalType = "matchModal" | "finishModal";

interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    fruitName: string | null;
    fruitLetter: string | null;
    onOpen: (type: ModalType, fruitName?: string, fruitLetter?: string) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    isOpen: false,
    fruitName: null,
    fruitLetter: null,
    onOpen: (type, fruitName = undefined, fruitLetter = undefined) => set({ type, isOpen: true, fruitName, fruitLetter }),
    onClose: () => set({ type: null, isOpen: false, fruitName: null, fruitLetter: null }),
}));
