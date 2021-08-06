export interface IProfile {
  displayName: string;
  username: string;
  posts: number;
  followers: number;
  following: number;
  bio: string;
  recentActivities: IActivity[];
}

export interface IActivity {
  type: "watched" | "liked" | "reviewed";
  message: string;
}
