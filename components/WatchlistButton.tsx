"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "ids";
const CHANGE_EVENT = "watchlist-change";

function getIdsSnapshot(): string {
  if (typeof window === "undefined") return "[]";

  try {
    const stored: unknown = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) ?? "[]",
    );
    const ids = Array.isArray(stored)
      ? stored.filter((id): id is string => typeof id === "string")
      : [];

    return JSON.stringify(ids);
  } catch {
    return "[]";
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export default function WatchlistButton({ companyId }: { companyId: string }) {
  const ids = JSON.parse(
    useSyncExternalStore(subscribe, getIdsSnapshot, () => "[]"),
  ) as string[];
  const isWatchlisted = ids.includes(companyId);

  function switchWatchList() {
    const nextIds = isWatchlisted
      ? ids.filter((id) => id !== companyId)
      : [...ids, companyId];

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <button
      className={`btn btn-sm ${
        isWatchlisted ? "btn-soft btn-success" : "btn-outline"
      }`}
      type="button"
      aria-pressed={isWatchlisted}
      onClick={switchWatchList}
    >
      {isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
    </button>
  );
}
