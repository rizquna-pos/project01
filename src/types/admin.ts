export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  isActive: boolean;
  propertyCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  id: string;
  name: string;
  type: 'province' | 'city' | 'district' | 'subdistrict';
  parentId?: string;
  slug: string;
  description?: string;
  isActive: boolean;
  propertyCount: number;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface LocationHierarchy extends Location {
  children?: LocationHierarchy[];
  parent?: Location;
}