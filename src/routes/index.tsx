import { useState } from "react";
import { Loading } from "@/components/Loading";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <AppRoutes />;
  }

  return <AuthRoutes />;
}