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

export interface Report {
  id: string;
  propertyId: string;
  reporterId: string;
  reporterName: string;
  reporterEmail: string;
  type: 'spam' | 'inappropriate_content' | 'fake_listing' | 'wrong_category' | 'duplicate' | 'other';
  reason: string;
  description?: string;
  status: 'pending' | 'under_review' | 'resolved' | 'dismissed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
  resolution?: string;
  property: {
    id: string;
    title: string;
    type: string;
    purpose: 'jual' | 'sewa';
    price: number;
    priceUnit: 'juta' | 'miliar';
    location: {
      city: string;
      province: string;
    };
    images: string[];
    agent: {
      id: string;
      name: string;
      email: string;
    };
    status: 'active' | 'inactive' | 'suspended' | 'removed';
  };
}

export interface ModerationAction {
  id: string;
  reportId?: string;
  propertyId: string;
  adminId: string;
  adminName: string;
  action: 'approve' | 'remove' | 'suspend' | 'warn_user' | 'edit_content' | 'change_category' | 'dismiss_report';
  reason: string;
  details?: string;
  previousStatus?: string;
  newStatus?: string;
  createdAt: string;
  property: {
    id: string;
    title: string;
    agent: {
      id: string;
      name: string;
      email: string;
    };
  };
}

export interface ModerationStats {
  totalReports: number;
  pendingReports: number;
  resolvedReports: number;
  dismissedReports: number;
  actionsToday: number;
  averageResolutionTime: number; // in hours
  reportsByType: {
    [key: string]: number;
  };
  reportsByPriority: {
    [key: string]: number;
  };
}