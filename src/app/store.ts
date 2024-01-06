import { create } from 'zustand';
import * as math from 'mathjs';

type CalculatorState = {
  displayValue: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
  handleButtonClick: (value: string) => void;
  handleClear: () => void;
  handleEquals: () => void;
};

export const useCalculatorStore = create<CalculatorState>((set) => ({
  displayValue: '0',
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  handleButtonClick: (value) =>
    set((state) => {
      let newValue;

      if (value === '(' && state.displayValue !== '0') {
        // Insert a space before an opening parenthesis if not at the beginning
        newValue = state.displayValue + ' ' + value;
      } else if (value === ')' && /\s\($/.test(state.displayValue)) {
        // Remove the last character if it's an opening parenthesis preceded by a space
        newValue = state.displayValue.slice(0, -2);
      } else if (value === ')' && /\s$/.test(state.displayValue)) {
        // Remove trailing space before closing parenthesis
        newValue = state.displayValue.trim() + value;
      } else {
        // Otherwise, just append the value
        newValue = state.displayValue === '0' ? value : state.displayValue + value;
      }

      return { displayValue: newValue };
    }),
  handleClear: () => set({ displayValue: '0' }),
  handleEquals: () => {
    set((state) => {
      let result;
      try {
        // Use mathjs to evaluate the expression
        result = math.evaluate(state.displayValue);
      } catch (error) {
        result = 'Error';
      }
      return { displayValue: result.toString() };
    });
  },
}));