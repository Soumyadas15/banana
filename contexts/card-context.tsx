"use client"

import { createContext, useContext, useState } from 'react';

interface CardContextType {
  fruitName: string | null;
  setFruitName: (message: string | null) => void;
  fruitLetter: string | null;
  setFruitLetter: (message: string | null) => void;
  totalScore: number | null;
  setTotalScore: (score: number | null) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCards = (): CardContextType => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCard must be used within a CardsProvider');
  }
  return context;
};

interface CardProviderProps {
  children: React.ReactNode;
}

export const CardsProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [fruitName, setFruitName] = useState<string | null>(null);
  const [fruitLetter, setFruitLetter] = useState<string | null>("");
  const [totalScore, setTotalScore] = useState<number | null>(null);

  return (
    <CardContext.Provider 
        value={{ 
            fruitName, 
            setFruitName, 
            fruitLetter, 
            setFruitLetter, 
            totalScore, 
            setTotalScore 
        }}
    >
      {children}
    </CardContext.Provider>
  );
};



