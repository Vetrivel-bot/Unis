import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import TabNavigator from "./src/navigation/TabNavigator";
import AuthContext from "./src/context/AuthContext";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
