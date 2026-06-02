// 📁 src/components/Header.js
import React from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useSafeClerk, useSafeUser } from "../src/shared/auth/useSafeClerk";
import Link from "next/link";

const Header = () => {
  const { user } = useSafeUser();
  const { signOut } = useSafeClerk();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Navigation */}
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">🏠 Dashboard</Link>
        <Link href="/quote-request">💼 Demander un devis</Link>
        <Link href="/track-shipment">📦 Suivi</Link>
        {user && <Link href="/profile/addresses">📇 Mes adresses</Link>}

        {user?.publicMetadata?.role === "admin" && (
          <Link href="/admin">⚙️ Admin</Link>
        )}
        {user?.publicMetadata?.role === "client" && (
          <Link href="/client">👤 Client</Link>
        )}
        {user?.publicMetadata?.role === "delivery" && (
          <Link href="/delivery">🚚 Livraison</Link>
        )}
      </nav>

      {/* Zone utilisateur */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {user ? (
          <>
            <span>
              Connecté :{" "}
              <strong>
                {user.primaryEmailAddress?.emailAddress || "Utilisateur"}
              </strong>
            </span>
            <UserButton />
            <button
              onClick={() => signOut(() => (window.location.href = "/"))}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #ccc",
                borderRadius: "6px",
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
            >
              Déconnexion
            </button>
          </>
        ) : (
          <SignInButton mode="modal">
            <button
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #007bff",
                borderRadius: "6px",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "#fff",
              }}
            >
              Connexion
            </button>
          </SignInButton>
        )}
      </div>
    </header>
  );
};

export default Header;
