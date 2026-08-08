"use client";

import { createContext, useContext, useState } from "react";

const ConversationContext = createContext();

export function ConversationProvider({ children }) {
  const [activeConversationId, setActiveConversationId] =
    useState(1);

  return (
    <ConversationContext.Provider
      value={{
        activeConversationId,
        setActiveConversationId,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  return useContext(ConversationContext);
}
