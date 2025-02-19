
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Plus, AlertCircle, CheckCircle2 } from "lucide-react";
import { ProjectFormData, StepType } from "@/types/services";

interface ProjectSummaryProps {
  formData: ProjectFormData;
  steps: StepType[];
  activeStep: number;
  calculateEstimate: () => string;
}

export const ProjectSummary = ({ formData, steps, activeStep, calculateEstimate }: ProjectSummaryProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Summary</CardTitle>
          <CardDescription>Real-time overview of your project specifications</CardDescription>
        </CardHeader>
        <CardContent>
          {/* ... Copy the existing project summary content from Services.tsx */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completion Progress</CardTitle>
          <CardDescription>Track your project configuration progress</CardDescription>
        </CardHeader>
        <CardContent>
          {/* ... Copy the existing completion progress content from Services.tsx */}
        </CardContent>
      </Card>
    </div>
  );
};
