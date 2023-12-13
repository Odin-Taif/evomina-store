import { create } from "zustand";

interface LoginModelState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Zustand hook for managing the login modal state
const useLoginModel = create<LoginModelState>((set) => ({
  isOpen: false,  // Initial state: modal is closed
  onOpen: () => set({ isOpen: true }),  // Action to open the modal
  onClose: () => set({ isOpen: false }),  // Action to close the modal
}));

export default useLoginModel;
