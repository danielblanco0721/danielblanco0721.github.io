import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const containerRef = useRef(null);

  const baseNotifications = [
    { id: 1, text: "Nuevo proyecto publicado 🚀", read: false },
    {
      id: 2,
      text: "Explorando activamente el uso de IA aplicada al desarrollo de software y automatización de sistemas 🚀",
      read: false,
    },
  ];

  // Cargar desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem("notifications");

    if (saved) {
      const savedArray = JSON.parse(saved);
      const savedMap = new Map(savedArray.map((n) => [n.id, n]));
      setNotifications(
        baseNotifications.map((n) => savedMap.get(n.id) || n)
      );
    } else {
      setNotifications(baseNotifications);
    }
  }, []);

  // Persistir
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Cerrar al hacer click fuera
  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Marcar como leídas al abrir
  useEffect(() => {
    if (open) {
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, read: true }))
      );
    }
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full p-2 hover:bg-gray-700"
      >
        <FaBell className="text-2xl text-white" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-lg bg-gray-900 shadow-lg">
          <div className="p-3">
            <h4 className="mb-2 text-sm font-bold text-gray-200">
              Notificaciones
            </h4>

            {notifications.length > 0 ? (
              <ul className="max-h-52 overflow-auto space-y-2">
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    className={`rounded p-2 text-sm ${
                      n.read
                        ? "text-gray-400"
                        : "text-white bg-gray-800"
                    }`}
                  >
                    {n.text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">
                No hay notificaciones.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
