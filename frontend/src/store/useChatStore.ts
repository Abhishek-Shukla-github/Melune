import { axiosInstance } from "@/lib/axios";
import { Message, User } from "@/types";
import { create } from "zustand";

interface ChatStore {
	users: User[];
	isLoading: boolean;
	error: string | null;
	isConnected: boolean;
	onlineUsers: Set<string>;
	userActivities: Map<string, string>;
	messages: Message[];
	selectedUser: User | null;

	fetchUsers: () => Promise<void>;
}

const baseURL = import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";

export const useChatStore = create<ChatStore>((set) => ({
	users: [],
	isLoading: false,
	error: null,
	isConnected: false,
	onlineUsers: new Set(),
	userActivities: new Map(),
	messages: [],
	selectedUser: null,


	fetchUsers: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get("/users");
			set({ users: response.data });
		} catch (error: any) {
			set({ error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},

}));
