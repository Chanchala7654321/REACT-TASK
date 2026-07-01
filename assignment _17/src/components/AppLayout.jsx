import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2 style={{ color: "orangered", margin: 0 }}> CineSphere</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "orangered" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "orangered" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Favorites
          </NavLink>
        </div>
      </nav>

      <main style={{ padding: "20px 40px" }}>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;