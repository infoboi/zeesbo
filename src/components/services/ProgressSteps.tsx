
import { motion } from "framer-motion";
import { StepType } from "@/types/services";

interface ProgressStepsProps {
  steps: StepType[];
  activeStep: number;
}

export const ProgressSteps = ({ steps, activeStep }: ProgressStepsProps) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                backgroundColor: index <= activeStep ? "#8B7355" : "#E5E5E5"
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-2
                ${index <= activeStep ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-500'}`}
            >
              <step.icon className="w-5 h-5" />
            </motion.div>
            <span className="text-sm text-neutral-600 hidden md:block">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
