import { create } from "zustand";

interface CartModelState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
// Zustand hook for managing the login modal state
const useCartModel = create<CartModelState>((set) => ({
  isOpen: false, // Initial state: modal is closed
  onOpen: () => set({ isOpen: true }), // Action to open the modal
  onClose: () => set({ isOpen: false }), // Action to close the modal
}));

export default useCartModel;
