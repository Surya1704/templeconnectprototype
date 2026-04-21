// Tiny localStorage helpers for the FaithConnect MVP.
// All app state (users, sessions, bookings, likes, saves) lives here.

export interface StoredUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string; // NOT secure — MVP only
}

export interface Booking {
  id: string;
  userId: string;
  templeId: string;
  templeName: string;
  poojaId: string;
  poojaName: string;
  date: string; // ISO yyyy-mm-dd
  createdAt: string;
}

const KEYS = {
  users: "fc.users",
  session: "fc.session",
  bookings: "fc.bookings",
  likes: "fc.likes",
  saves: "fc.saves",
  savedTemples: "fc.savedTemples",
} as const;

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ---- weak hash (not secure, MVP only) ----
function pseudoHash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return String(h);
}

// ---- users / session ----
export const auth = {
  getUsers: () => read<StoredUser[]>(KEYS.users, []),
  getSession: () => read<{ userId: string } | null>(KEYS.session, null),
  setSession: (userId: string | null) =>
    userId ? write(KEYS.session, { userId }) : localStorage.removeItem(KEYS.session),
  signup(email: string, password: string, name: string): StoredUser {
    const users = auth.getUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("An account with this email already exists.");
    }
    const user: StoredUser = {
      id: crypto.randomUUID(),
      email,
      name,
      passwordHash: pseudoHash(password),
    };
    write(KEYS.users, [...users, user]);
    auth.setSession(user.id);
    return user;
  },
  login(email: string, password: string): StoredUser {
    const user = auth
      .getUsers()
      .find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user || user.passwordHash !== pseudoHash(password)) {
      throw new Error("Invalid email or password.");
    }
    auth.setSession(user.id);
    return user;
  },
  logout: () => auth.setSession(null),
  current(): StoredUser | null {
    const session = auth.getSession();
    if (!session) return null;
    return auth.getUsers().find((u) => u.id === session.userId) ?? null;
  },
};

// ---- bookings ----
export const bookings = {
  all: () => read<Booking[]>(KEYS.bookings, []),
  forUser: (userId: string) => bookings.all().filter((b) => b.userId === userId),
  add(b: Omit<Booking, "id" | "createdAt">): Booking {
    const newB: Booking = { ...b, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
    write(KEYS.bookings, [newB, ...bookings.all()]);
    return newB;
  },
  get: (id: string) => bookings.all().find((b) => b.id === id),
};

// ---- likes / saves (reels) ----
export const likes = {
  all: () => read<Record<string, string[]>>(KEYS.likes, {}),
  forUser: (userId: string) => likes.all()[userId] ?? [],
  toggle(userId: string, reelId: string) {
    const map = likes.all();
    const list = new Set(map[userId] ?? []);
    list.has(reelId) ? list.delete(reelId) : list.add(reelId);
    map[userId] = [...list];
    write(KEYS.likes, map);
    return list.has(reelId);
  },
};

export const saves = {
  all: () => read<Record<string, string[]>>(KEYS.saves, {}),
  forUser: (userId: string) => saves.all()[userId] ?? [],
  toggle(userId: string, reelId: string) {
    const map = saves.all();
    const list = new Set(map[userId] ?? []);
    list.has(reelId) ? list.delete(reelId) : list.add(reelId);
    map[userId] = [...list];
    write(KEYS.saves, map);
    return list.has(reelId);
  },
};

// ---- saved temples ----
export const savedTemples = {
  all: () => read<Record<string, string[]>>(KEYS.savedTemples, {}),
  forUser: (userId: string) => savedTemples.all()[userId] ?? [],
  toggle(userId: string, templeId: string) {
    const map = savedTemples.all();
    const list = new Set(map[userId] ?? []);
    list.has(templeId) ? list.delete(templeId) : list.add(templeId);
    map[userId] = [...list];
    write(KEYS.savedTemples, map);
    return list.has(templeId);
  },
};
