
export interface ProjectFormData {
  projectType: string;
  propertyType: string;
  squareFootage: string;
  budget: string;
  timeline: string;
  requirements: string;
  selectedServices: string[];
  location: string;
  startDate: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  preferredContactMethod: string;
  additionalNotes: string;
  materialPreferences: string[];
  specialRequirements: {
    permitRequired: boolean;
    sustainableMaterials: boolean;
    accessibilityNeeds: boolean;
    historicalConsideration: boolean;
  };
}

export interface ServiceType {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

export interface StepType {
  title: string;
  icon: React.ComponentType;
}
