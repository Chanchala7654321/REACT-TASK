import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fatchProfile, fatchState } from "../api/dashboardApi";

function LegacyDashboard() {
  const profile = useQuery({
    queryKey: ["profile"],
    queryFn: fatchProfile,
  });

  const state = useQuery({
    queryKey: ["state"],
    queryFn: fatchState,
  });

  if (profile.isLoading || state.isLoading) return <h1>Loding.......</h1>;

  if (profile.isError || state.isError) return <h1>Error...</h1>;

  const user = profile.data?.[0];

  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>{user?.username}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
}

export default LegacyDashboard;
