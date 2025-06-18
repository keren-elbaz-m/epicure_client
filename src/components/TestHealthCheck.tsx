// src/components/TestHealthCheck.tsx
"use client";
import { useEffect } from "react";
import { checkServerHealth } from "@/app/api/health";

export default function TestHealthCheck() {
    useEffect(() => {
        checkServerHealth()
            .then((msg) => console.log("✅ Server responded:", msg))
            .catch((err) => console.error("❌ Server error:", err));
    }, []);

    return null;
}
