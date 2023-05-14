export interface User {
  id: number;
  name: string;
}

export const UserEmptyState: User = {
    id: 0,
    name: '',
}

export interface APIUser {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   ApiLocation;
    location: ApiLocation;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export interface ApiLocation {
    name: string;
    url:  string;
}
